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

router.post('/', async (req, res) => {
    const { title, contents} = req.body;
        try {
            if (title, contents){
                const data = await db.insert({ title, contents});
                res.status(201),json({ data, title, contents});
            } else {
                res.status(400).json({
                    message: "Please provide title and contents for the post."
                });
            }
        } catch (error) {
            res.status(500).json({
                message: "There was an error while saving the post to the database"
            });
        }
    
})

router.delete('/:id', async (req, res) => {
    try {
        const data = await db.remove(req.params.id);
        if (data > 0) {
            res.status(200).json({
                message: `${data} post removed`
            });
        } else {
            res.status(404).json({
                message: "The post with the specified ID does not exist."
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "The post could not be removed"
        });
    }
});



module.exports = router;