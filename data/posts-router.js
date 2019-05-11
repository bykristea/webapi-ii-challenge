const express = require('express');

const db = require('./db.js');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const data = await db.find(req.query);
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error retrieving posts",
        });
    }
});




module.exports = router;