require('../config/mongoConnection');
const LineChart = require('../mongoModels/LineChart');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  LineChart.find()
    .then((LineCharts) => {
      res.send(LineCharts);
    })
    .catch((err) => console.log(err));
});

router.get('/:name', (req, res) => {
  LineChart.findOne({ name: req.params.name })
    .then((LineChart) => {
      res.send(LineChart);
    })
    .catch((err) => console.log(err));
});

router.post('/', (req, res) => {
  const newLineChart = new LineChart({
    name: req.body.name,
    data: req.body.data
  });
  newLineChart
    .save()
    .then((newLineChart) =>
      res.json({
        message: 'New LineChart created!',
        newLineChart: newLineChart
      })
    )
    .catch((err) => console.log(err));
});

router.delete('/:name', (req, res) => {
  LineChart.deleteOne({ name: req.params.name })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
