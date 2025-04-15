const express = require('express');
const router = express.Router();

app.get('/', (req, res) => {
    res.send('메인');
});

module.exports = router;