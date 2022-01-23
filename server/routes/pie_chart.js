require('../config/mongoConnection');
const PieChart = require('../mongoModels/PieChart');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  PieChart.find()
    .then((PieCharts) => {
      res.send(PieCharts);
    })
    .catch((err) => console.log(err));
});

router.get('/:name', (req, res) => {
  PieChart.findOne({ name: req.params.name })
    .then((PieChart) => {
      res.send(PieChart);
    })
    .catch((err) => console.log(err));
});

router.post('/', (req, res) => {
  const newPieChart = new PieChart({
    name: req.body.name,
    data: req.body.data
  });
  newPieChart
    .save()
    .then((newPieChart) =>
      res.json({
        message: 'New PieChart created!',
        newPieChart: newPieChart
      })
    )
    .catch((err) => console.log(err));
});

router.delete('/:name', (req, res) => {
  PieChart.deleteOne({ name: req.params.name })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
