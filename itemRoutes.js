const express = require('express');
const router = express.Router();
const Item = require('../models/Item');

// Create
router.post('/', async (req, res) => {
    console.log("Request body:", req.body); // Debugging
    try {
        const item = new Item(req.body);
        await item.save();
        res.status(201).json(item);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});
router.put('/:id', async (req, res) => {
    try {
        console.log("Request body:", req.body); // Debugging
        const item = await Item.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!item) return res.status(404).json({ error: "Item not found" });
        res.json(item);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});
router.get('/', async (req, res) => {
    try {
        const items = await Item.find({ isDeleted: false });
        res.json(items);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
module.exports = router;