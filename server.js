const express = require('express');
const cors = require('cors');
const path = require('path');
const fetch = require('node-fetch');
const app = express();

// Enable CORS for all origins in development
app.use(cors());

// Serve static files
app.use(express.static(path.join(__dirname, 'website')));

// Proxy endpoint for dog registry API
app.get('/api/dogs', async (req, res) => {
    try {
        const response = await fetch('https://registry.dog/api/v1/breeds/list');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('API Error:', error);
        res.status(500).json({ error: 'Failed to fetch dog breeds' });
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🧅 Shrek server running on http://localhost:${PORT}`);
});
