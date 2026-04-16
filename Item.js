const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: { type: String, required: false },
    email: { type: String, required: false },
    age: { type: Number, required: false },
    isDeleted: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Item', itemSchema);