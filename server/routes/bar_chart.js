require('../config/mongoConnection');
const BarChart = require('../mongoModels/BarChart');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  BarChart.find()
    .then((barCharts) => {
      res.send(barCharts);
    })
    .catch((err) => console.log(err));
});

router.get('/:name', (req, res) => {
  BarChart.findOne({ name: req.params.name })
    .then((barChart) => {
      res.send(barChart);
    })
    .catch((err) => console.log(err));
});

router.post('/', (req, res) => {
  const newBarChart = new BarChart({
    name: req.body.name,
    data: req.body.data
  });
  newBarChart
    .save()
    .then((newBarChart) =>
      res.json({
        message: 'New BarChart created!',
        newBarChart: newBarChart
      })
    )
    .catch((err) => console.log(err));
});

router.delete('/:name', (req, res) => {
  BarChart.deleteOne({ name: req.params.name })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
