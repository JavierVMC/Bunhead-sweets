var express = require('express');
var router = express.Router();

const sequelize = require('../models/index.js').sequelize;
var initModels = require('../models/init-models');
var models = initModels(sequelize);

// GET all
router.get('/', function (req, res, next) {
  models.product_categories
    .findAll({})
    .then((product_categories) => {
      res.send(product_categories);
    })
    .catch((error) => console.log(error));
});

// GET by id
router.get('/:id', function (req, res, next) {
  models.product_categories
    .findByPk(req.params.id)
    .then((category) => {
      res.status(200).send(category);
    })
    .catch((error) =>
      res.status(404).send({
        message: 'Something was wrong',
        error
      })
    );
});

// POST (agregar nuevo elemento)
router.post('/', function (req, res, next) {
  const newCategory = {
    name: req.body.name
  };
  models.product_categories
    .create(newCategory)
    .then((response) =>
      res.send({
        message: 'Category added successfully',
        response
      })
    )
    .catch((error) =>
      res.send({
        message: 'Something was wrong',
        error
      })
    );
});

// PUT (editar)
router.put('/:id', function (req, res, next) {
  const newCategoryInfo = {
    name: req.body.name
  };
  models.product_categories
    .update(newCategoryInfo, {
      where: {
        id: req.params.id
      }
    })
    .then((response) =>
      res.send({
        message: 'Category updated successfully',
        response
      })
    )
    .catch((error) =>
      res.send({
        message: 'Something was wrong',
        error
      })
    );
});

// DELETE
router.delete('/:id', function (req, res, next) {
  models.product_categories
    .destroy({
      where: {
        id: req.params.id
      }
    })
    .then((response) =>
      res.send({
        message: 'Category deleted successfully',
        response
      })
    )
    .catch((error) =>
      res.send({
        message: 'Something was wrong',
        error
      })
    );
});

module.exports = router;
