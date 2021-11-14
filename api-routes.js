// Initialize express router
let router = require('express').Router();

// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Running',
        message: 'The API is running, request item data from /items'
    });
});

// Import Items controller
var itemController = require('./itemController');

// Item routes
router.route('/items')
    .get(itemController.allItems)

// Export API routes
module.exports = router;