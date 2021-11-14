// Import item model
Item = require('./itemModel');

// Handle default action (retrieve all items and their data)
exports.allItems = function (req, res) {
    Item.get(function (err, items) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Items retrieved successfully",
            data: items
        });
    });
};