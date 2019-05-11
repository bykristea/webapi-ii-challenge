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
            message: "The posts information could not be retrieved.",
        });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const data = await db.findById(req.params.id);

        if (data.length > 0) {
            res.status(200).json(data);
        } else {
            res.status(404).json({
                message: "The post with the specified ID does not exist.",
            });
        } 
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "The post information could not be retrieved.",
        })
    }
})




module.exports = router;