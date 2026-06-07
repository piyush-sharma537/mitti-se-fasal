const express = require('express');
const router = express.Router();

const SYSTEM_PROMPT = `Tu ek expert Indian farming assistant hai. Tera naam Kisan Mitra hai. Tu sirf farming, crops, soil, fertilizers, irrigation aur kheti se related sawaalon ka jawab dega. Hinglish mein baat kar - simple aur friendly tone rakho jaise ek experienced kisan dusre kisan se baat karta hai. Agar koi farming se bahar ka sawaal pooche toh politely farming pe wapas lao.`;

router.post('/', async (req, res) => {
  try {
    const { messages } = req.body;
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Messages array required hai.' });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({
        error: 'GEMINI_API_KEY configure nahi hua.',
        reply: 'Kisan Mitra abhi setup ho raha hai. Thoda wait karo! 🙏'
      });
    }

    const lastMessage = messages[messages.length - 1].content;

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
        contents: messages.map(m => ({
          role: m.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: m.content }]
        }))
      })
    });

    const data = await response.json();
    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || 'Maafi karo bhai, dobara poochho! 🙏';
    res.json({ reply });

  } catch (error) {
    console.error('Chat API error:', error);
    res.status(500).json({
      error: error.message,
      reply: 'Kuch takleef aa gayi bhai. Thoda wait karo aur dobara try karo. 🌾'
    });
  }
});

module.exports = router;
