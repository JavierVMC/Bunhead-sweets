const { Schema, model } = require('mongoose');

const BarChart = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  data: [
    {
      year: {
        type: Number,
        required: true
      },
      value: {
        type: Number,
        required: true
      }
    }
  ]
});

module.exports = model('BarChart', BarChart);
