const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const Tesseract = require("tesseract.js");
const footData = require("./data");

const app = express();
const PORT = 5000;

app.use(cors());

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) =>
    cb(null, Date.now() + path.extname(file.originalname)),
});
const upload = multer({ storage });

app.post("/upload", upload.single("image"), async (req, res) => {
  const imagePath = path.join(__dirname, "uploads", req.file.filename);

  try {
    const { data: { text } } = await Tesseract.recognize(imagePath, "eng");

    // Find all matches
    const matches = footData.filter(item => text.includes(item.e_code));

    const response = matches.length > 0
      ? { success: true, extracted: text, matched: matches }
      : { success: false, extracted: text, matched: [] };

    res.json(response);
    fs.unlinkSync(imagePath);
  } catch (err) {
    console.error("OCR error:", err);
    res.status(500).json({ success: false, error: "OCR failed" });
  }
});

app.listen(PORT, () => console.log(`🚀 Backend running at http://localhost:${PORT}`));
