require('../config/mongoConnection');
const Report = require('../mongoModels/Report');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  Report.find()
    .then((reports) => {
      res.send(reports);
    })
    .catch((err) => console.log(err));
});

router.get('/:title', (req, res) => {
  Report.findOne({ title: req.params.title })
    .then((report) => {
      res.send(report);
    })
    .catch((err) => console.log(err));
});

router.post('/', (req, res) => {
  const products_sold = [];
  req.body.products_sold.forEach((product) => {
    products_sold.push(product);
  });

  const newReport = new Report({
    title: req.body.title,
    date: Date.now(),
    from: req.body.from,
    to: req.body.to,
    total_incomes: req.body.total_incomes,
    products_sold: products_sold
  });
  newReport
    .save()
    .then((newReport) =>
      res.json({
        message: 'New report created!',
        newReport: newReport
      })
    )
    .catch((err) => console.log(err));
});

router.delete('/:title', (req, res) => {
  Report.deleteOne({ title: req.params.title })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
