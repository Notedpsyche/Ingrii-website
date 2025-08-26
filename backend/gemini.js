import express from "express";
import fetch from "node-fetch";
import fs from "fs";
import path from "path";


const router = express.Router();

const dataPath = path.resolve("output.json"); 
const dataset = JSON.parse(fs.readFileSync(dataPath, "utf8"));

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

function searchDataset(query) {
  const lowerQ = query.toLowerCase();
  return dataset.find(item =>
    item.e_code.toLowerCase() === lowerQ ||
    item.title.toLowerCase().includes(lowerQ)
  );
}

router.post("/chat", async (req, res) => {
  const userMessage = req.body.message;

  
  const match = searchDataset(userMessage);

  let context = "";
  if (match) {
    context = `
      Ingredient found in dataset:
      Code: ${match.e_code}
      Name: ${match.title}
      Info: ${match.info}
      Type: ${match.e_type}
      Halal status: ${match.halal_status}
      Risk factor: ${match.risk_factor}
      Countries banned: ${match.countries_banned}
    `;
  } else {
    context = "No direct match found in dataset. Use your own knowledge.";
  }

  try {
    // Send combined context + user message to Gemini
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [
                { text: `Context: ${context}\n\nUser question: ${userMessage}` }
              ]
            }
          ]
        })
      }
    );

    const data = await response.json();
    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Sorry, I couldn’t understand.";

    res.json({ reply });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error contacting Gemini API" });
  }
});

export default router;