const OpenAI = require('openai');

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const chatAssistant = async (req, res) => {
    const { message } = req.body;

    try {
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [
                { role: 'system', content: 'You are a helpful AI assistant.' },
                { role: 'user', content: message }
            ]
        });

        res.json({ reply: response.choices[0].message.content });
    } catch (err) {
        console.error('OpenAI Error:', err);
        res.status(500).json({ error: 'ChatGPT failed to respond.' });
    }
};

module.exports = { chatAssistant };
