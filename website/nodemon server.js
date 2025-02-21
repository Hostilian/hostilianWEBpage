const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for development
app.use(cors({
    origin: 'http://127.0.0.1:5500',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));

// Serve static files from website directory
app.use(express.static('website'));

// API routes
app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from the API!' });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
