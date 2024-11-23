const express = require('express');
const app = express();

// Increase payload size limit to 50MB
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true}));

// POST endpoint for /helloWorld
app.post('/helloWorld', (req, res) => {
    try {
        res.status(200).json({ message: 'Hello World!' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

/// POST endpoint that receives a name and sends back "Hello {name}"
app.post('/greet', (req, res) => {
    try {
        const { name } = req.body;
        if (!name) {
            return res.status(400).json({ error: 'Name is required' });
        }
        res.status(200).json({ message: `Hello ${name}` });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Start server
const PORT = 5001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
