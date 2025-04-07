
require('dotenv').config();
const express = require('express');
const OpenAI = require('openai');
const router = express.Router();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });


const mockProducts = [
  { id: 1, name: 'Wireless Mouse', price: '$25.99', availability: 'In Stock' },
  { id: 2, name: 'Mechanical Keyboard', price: '$79.99', availability: 'Only 3 left' },
  { id: 3, name: 'USB-C Hub', price: '$39.99', availability: 'Out of Stock' },
];

function searchProduct(message) {
  return mockProducts.find(p =>
    message.toLowerCase().includes(p.name.toLowerCase())
  );
}

router.post('/', async (req, res) => {
  const { message } = req.body;

 
  const matched = searchProduct(message);
  if (matched) {
    return res.json({
      reply: `📦 *Product:* ${matched.name}\n💵 *Price:* ${matched.price}\n📊 *Availability:* ${matched.availability}`
    });
  }

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content:
            'You are a helpful assistant that answers customer questions about products, orders, refunds, and store policies.',
        },
        { role: 'user', content: message },
      ],
    });

    res.json({ reply: completion.choices[0].message.content });
  } catch (err) {
    console.error('OpenAI Error:', err);
    res.status(500).json({ error: 'ChatGPT failed to respond.' });
  }
});

module.exports = router;
