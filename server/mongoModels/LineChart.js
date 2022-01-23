const { Schema, model } = require('mongoose');

const LineChart = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  data: [
    {
      name: {
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

module.exports = model('LineChart', LineChart);
