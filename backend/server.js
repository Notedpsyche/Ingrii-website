const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const Tesseract = require("tesseract.js");
const footData = require("./data");


require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json()); 

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// ================= OCR ENDPOINT =================
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) =>
    cb(null, Date.now() + path.extname(file.originalname)),
});
const upload = multer({ storage });

app.post("/upload", upload.single("image"), async (req, res) => {
  const imagePath = path.join(__dirname, "uploads", req.file.filename);

  try {
    const {
      data: { text },
    } = await Tesseract.recognize(imagePath, "eng");

    // Match against dataset
    const matches = footData.filter((item) => text.includes(item.e_code));

    const response =
      matches.length > 0
        ? { success: true, extracted: text, matched: matches }
        : { success: false, extracted: text, matched: [] };

    res.json(response);
    fs.unlinkSync(imagePath);
  } catch (err) {
    console.error("OCR error:", err);
    res.status(500).json({ success: false, error: "OCR failed" });
  }
});

// ================= CHATBOT ENDPOINT =================
app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    // Let Gemini answer with both general + dataset knowledge
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = `
You are INGRII, a helpful assistant that explains food additives.
User message: "${message}"

Here is the dataset of additives: ${JSON.stringify(footData, null, 2)}

If the user's query matches an e_code in the dataset, use that info first.
If not, answer with your general knowledge.
    `;

    const result = await model.generateContent(prompt);
    res.json({ reply: result.response.text() });
  } catch (error) {
    console.error("Chatbot error:", error);
    res.status(500).json({ error: "Chatbot failed" });
  }
});

// ================= START SERVER =================
app.listen(PORT, () =>
  console.log(`🚀 Backend running at http://localhost:${PORT}`)
);

