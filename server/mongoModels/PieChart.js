const { Schema, model } = require('mongoose');

const PieChart = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  data: [
    {
      label: {
        type: String,
        required: true
      },
      value: {
        type: Number,
        required: true
      }
    }
  ]
});

module.exports = model('PieChart', PieChart);
