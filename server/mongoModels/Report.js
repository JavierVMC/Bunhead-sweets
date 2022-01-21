const { Schema, model } = require('mongoose');

const Report = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  from: {
    type: Date,
    required: true,
    default: Date.now
  },
  to: {
    type: Date,
    required: true,
    default: Date.now
  },
  total_incomes: {
    type: Number,
    required: true,
    default: 0
  },
  products_sold: [
    {
      product_name: {
        type: String,
        required: true,
        default: ''
      },
      quantity: {
        type: Number,
        required: true,
        default: 0
      },
      price: {
        type: Number,
        required: true,
        default: 0
      }
    }
  ]
});

module.exports = model('Report', Report);
