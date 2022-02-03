var express = require('express');
var router = express.Router();

const sequelize = require('../models/index.js').sequelize;
var initModels = require('../models/init-models');
var models = initModels(sequelize);

// GET all
router.get('/', function (req, res, next) {
  models.orders
    .findAll({})
    .then((orders) => {
      res.send(orders);
    })
    .catch((error) => console.log(error));
});

// GET by id
router.get('/:id', function (req, res, next) {
  models.orders
    .findAll({
      where: { id: req.params.id },
      attributes: [
        'id',
        'user_email',
        'country',
        'city',
        'street',
        'date',
        'total',
        'card_number'
      ]
    })
    .then(function (orders) {
      res.send(orders);
    })
    .catch((error) => console.log(error));
});

router.get('/user/:email', (req, res) => {
  models.orders
    .findAll({
      where: {
        user_email: req.params.email
      }
    })
    .then((orders) => res.send(orders.at(-1)))
    .catch((err) => console.log(err));
});

router.post('/report/info', (req, res) => {
  models.order_items.belongsTo(models.orders, {
    foreignKey: 'order_id',
    targetKey: 'id'
  });
  models.order_items.belongsTo(models.products, {
    foreignKey: 'product_id',
    targetKey: 'id'
  });
  sequelize
    .query(
      "SELECT products.id,products.name,products.price,B.quantity,A.id as orderID,A.total as orderTotal,A.date from orders as A INNER JOIN order_items as B ON A.id=B.order_id INNER JOIN products ON B.product_id=products.id  where A.date BETWEEN'" +
        req.body.from +
        "' AND '" +
        req.body.to +
        "';"
    )
    .then((reportInfo) => {
      const productoFinal = [];
      const productsSold = [];
      const productsPrice = [];
      const productQuantity = [];

      let arreglos = reportInfo[0];
      for (let fila of arreglos) {
        if (!productsSold.includes(fila.name)) {
          productsSold.push(fila.name);
          productsPrice.push(fila.price);
          productQuantity.push(fila.quantity);
        } else {
          let indice = productsSold.indexOf(fila.name);
          productQuantity[indice] += fila.quantity;
        }
      }

      for (let i = 0; i < productsSold.length; i++) {
        let contenido = {
          product_name: productsSold[i],
          price: productsPrice[i],
          quantity: productQuantity[i]
        };
        productoFinal.push(contenido);
      }

      let total = 0;
      for (let i = 0; i < productsPrice.length; i++) {
        let price = productsPrice[i];
        let quantity = productQuantity[i];
        total += price * quantity;
      }

      const objeto = {
        title: req.body.title,
        products_sold: productoFinal,
        total_incomes: total
      };
      res.send(objeto);
    })
    .catch((error) => res.status(400).send(error));
});

// POST (agregar nuevo elemento)
router.post('/', function (req, res, next) {
  const user_email = req.body.user_email;
  const country = req.body.country;
  const city = req.body.city;
  const street = req.body.street;
  const date = req.body.date;
  const total = req.body.total;
  const card_number = req.body.card_number;

  models.orders.create({
    user_email: user_email,
    country: country,
    city: city,
    street: street,
    date: date,
    total: total,
    card_number: card_number
  });
});

// DELETE
router.delete('/:id', function (req, res, next) {
  models.orders
    .destroy({
      where: { id: req.params.id }
    })
    .then(function (result) {
      if (result) {
        res.send('El registro se encuentra');
      } else {
        res.send('El registro no se encuentra');
      }
    });
});

module.exports = router;
