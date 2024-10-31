const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// Sample endpoint for chat messages
app.post('/api/chat', (req, res) => {
    const userMessage = req.body.message;
    
    // Simulated response logic (you can integrate ChatGPT API here)
    const botResponse = `You said: ${userMessage}`;
    
    res.json({ message: botResponse });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
