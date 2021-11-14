var mongoose = require('mongoose');

// Create stats schema for the item stats array
var statsSchema = new mongoose.Schema({
    stat: String,
    value: String,
    stack: String,
    add: String
});

// Create Item schema
var itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    effect: {
        type: String,
        required: true
    },
    rarity: {
        type: String,
        required: true
    },
    category: [String],
    id: Number,
    unlock: String,
    stats: [statsSchema],
    cooldown: String
});

// Export Item model
var Item = module.exports = mongoose.model("Model", itemSchema, 'item');
module.exports.get = function (callback, limit) {
    Item.find(callback).limit(limit);
}