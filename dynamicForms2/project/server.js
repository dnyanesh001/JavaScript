const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/submit', (req, res) => {
    const formData = req.body;
    fs.writeFile('formData.json', JSON.stringify(formData, null, 2), (err) => {
        if (err) {
            console.error('Error writing to file:', err);
            res.status(500).json({ error: 'Failed to save form data' });
        } else {
            res.json({ message: 'Form data saved successfully' });
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
