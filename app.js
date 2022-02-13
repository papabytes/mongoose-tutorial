require('dotenv').config();

const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

// routers;
const shoppingListRouter = require('./routes/shoppingList');
const productRouter = require('./routes/products');

// parse application/json
app.use(bodyParser.json());

app.use('/api/shoppingList', shoppingListRouter);
app.use('/api/products', productRouter);

app.listen(process.env.APP_PORT, async () => {
    await mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING);
    console.log(`Server is running on http://localhost:${process.env.APP_PORT}`);
});