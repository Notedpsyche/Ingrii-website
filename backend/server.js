const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const Tesseract = require("tesseract.js");
const sharp = require("sharp");
const footData = require("./data"); // your dataset

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json()); // for /search endpoint

// Ensure uploads folder exists
const uploadsDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir);

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadsDir),
  filename: (req, file, cb) =>
    cb(null, Date.now() + path.extname(file.originalname)),
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB max
});

// ---------------- Upload + OCR ----------------
app.post("/upload", upload.single("image"), async (req, res) => {
  if (!req.file)
    return res.status(400).json({ success: false, error: "No file uploaded" });

  const imagePath = path.join(uploadsDir, req.file.filename);
  const resizedPath = imagePath + "_resized.png";

  try {
    // Preprocess image
    await sharp(imagePath)
      .rotate()                 // fix orientation
      .resize({ width: 1024 })  // downscale for OCR
      .grayscale()              // black & white
      .normalize()              // improve contrast
      .threshold(150)           // pure black & white
      .toFormat("png")
      .toFile(resizedPath);

    // Run OCR
    const { data: { text } } = await Tesseract.recognize(resizedPath, "eng", {
      logger: m => console.log("OCR progress:", m),
    });

    console.log("OCR extracted text:", text);

    // Match against dataset
    const matches = footData.filter(item =>
      text.toLowerCase().includes(item.e_code.toLowerCase())
    );

    const response = matches.length > 0
      ? { success: true, extracted: text, matched: matches }
      : { success: false, extracted: text, matched: [] };

    res.json(response);

    // Cleanup
    fs.unlinkSync(imagePath);
    fs.unlinkSync(resizedPath);

  } catch (err) {
    console.error("OCR error:", err);
    res.status(500).json({ success: false, error: "OCR failed" });
  }
});

// ---------------- Manual search ----------------
app.post("/search", (req, res) => {
  const { query } = req.body;
  if (!query) return res.json({ success: false, extracted: "", matched: [] });

  const matches = footData.filter(item =>
    query.toLowerCase().includes(item.e_code.toLowerCase())
  );

  res.json({ success: matches.length > 0, extracted: query, matched: matches });
});

// ---------------- Serve React frontend ----------------
const frontendPath = path.resolve(__dirname, "../frontend/build");
console.log("Serving frontend from:", frontendPath);

app.use(express.static(frontendPath));

// Catch-all route for React
app.get("*", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

// ---------------- Start server ----------------
app.listen(PORT, "0.0.0.0", () =>
  console.log(`🚀 Server + Frontend running at http://localhost:${PORT}`)
);