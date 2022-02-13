var express = require('express');
var router = express.Router();
var ProductModel = require('../models/product');

// TODO: Fetch shopping list items that have not been bought yet.
// support filters from query parameters
router.post('/', async function (req, res) {

    let body = req.body;

    console.log(`My body is so hot => ${JSON.stringify(body)}`);

    const newProduct = ProductModel(body);
    await newProduct.save();
    res.status(201).json(newProduct);
});

router.get('/', async function (req, res) {
    try {
        let query = req.query.filter;
        if(query){
            const search = query;
            const products = await ProductModel.find({name: {$regex: search, $options: 'i'}});
            res.json(products);
        }
        else{
            let products = await ProductModel.find({});
            res.json(products);
        }
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});

module.exports = router;