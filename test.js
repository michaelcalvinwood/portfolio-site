// nodejs endpoint
exports.helloWord = async (req, res) => {
    try {
        const { name } = req.body;
        if (!name) {
            return res.status(400).json({ error: 'Name is required' });
        }
        res.status(200).json({ message: `Hello ${name}!` });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
