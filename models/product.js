const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ProductSchema = new Schema({
  id: ObjectId,
  name: {type: String, required: [true, 'Name cannot be empty'], index: true},
  quantity: {type: Number, default: 1, min: [1, 'At least one unit should be available']},
  price: {type: Number, default: 1},
  bought_at: {type: Date}
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
