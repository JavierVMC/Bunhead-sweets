var express = require('express');
var router = express.Router();

const sequelize = require('../models/index.js').sequelize;
var initModels = require('../models/init-models');
var models = initModels(sequelize);

// GET all
router.get('/', function (req, res, next) {
  models.carts
    .findAll({})
    .then((carts) => {
      res.send(carts);
    })
    .catch((error) => console.log(error));
});

// GET by id
router.get('/:id', function (req, res, next) {
  models.carts
    .findAll({
      where: {
        user_email: req.params.id
      }
    })
    .then((carts) => {
      res.send(carts);
    })
    .catch((error) => console.log(error));
});

// POST (agregar nuevo elemento)
router.post('/', (req, res) => {
  models.carts
    .create({
      user_email: req.body.user_email
    })
    .then((newCart) => res.send(newCart));
});

// PUT (editar)
router.put('/:id', function (req, res, next) {
  models.carts
    .update(
      {
        user_email: req.body.user_email
      },
      {
        where: {
          id: req.params.id
        }
      }
    )
    .then(() => res.send('Carrito editado'));
});

// DELETE
router.delete('/:id', function (req, res, next) {
  models.carts
    .destroy({
      where: {
        id: req.params.id
      }
    })
    .then(() => res.send('Carrito eliminado'))
    .catch((error) => console.log(error));
});

router.get('/usercart/:email', (req, res) => {
  // models.carts.belongsTo(models.cart_items, {
  //   foreignKey: 'cart_id',
  //   targetKey: 'id'
  // });
  // models.products.belongsTo(models.cart_items, {
  //   foreignKey: 'product_id',
  //   targetKey: 'id'
  // });
  // models.product_categories.belongsTo(models.products, {
  //   foreignKey: 'category_id',
  //   targetKey: 'id'
  // });
  sequelize
    .query(
      "SELECT B.id,cart_items.id as cartItem_id,B.user_email,products.name,products.image,product_categories.name as category, products.price, products.description from cart_items   INNER JOIN carts as B ON cart_items.cart_id = B.id INNER JOIN products ON products.id = cart_items.product_id inner join product_categories on category_id = product_categories.id where B.user_email ='" +
        req.params.email +
        "';"
    )
    .then((cart) => {
      res.send(cart[0]);
    })
    .catch((error) => console.log(error));
});

module.exports = router;
