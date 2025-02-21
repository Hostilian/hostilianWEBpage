const express = require('express');
const cors = require('cors');
const path = require('path');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const app = express();

// Enable CORS for all origins in development
app.use(cors());

// Serve static files
app.use(express.static(path.join(__dirname, 'website')));

// Proxy endpoint for dog registry API
app.get('/api/dogs', async (req, res) => {
    try {
        const response = await fetch('https://registry.dog/api/v1/breeds/list', {
            headers: {
                'Accept': 'application/json',
                'User-Agent': 'Hostilian-Portfolio/1.0'
            }
        });

        if (!response.ok) {
            throw new Error(`API responded with status: ${response.status}`);
        }

        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('API Error:', error);
        res.status(500).json({
            status: 'error',
            message: 'Failed to fetch dog breeds',
            details: error.message
        });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🧅 Shrek server running on http://localhost:${PORT}`);
});
