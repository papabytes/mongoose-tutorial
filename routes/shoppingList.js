var express = require('express');
var router = express.Router();

// TODO: Fetch shopping list items that have not been bought yet.
// support filters from query parameters
router.get('/', function (req, res) {
    res.json({
        products: [],
        total: 0,
        page: 1,
        pageSize:10
    });
});


module.exports = router;