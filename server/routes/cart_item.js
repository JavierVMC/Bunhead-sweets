var express = require("express");
var router = express.Router();

const sequelize = require("../models/index.js").sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize);

// GET all
router.get("/", function (req, res, next) {
  models.cart_items
    .findAll({})
    .then((cart_items) => {
      res.send(cart_items);
    })
    .catch((error) => console.log(error));
});

// GET by id
router.get("/:id", function (req, res, next) {
  models.cart_items
  .findAll({
    where:{
      cart_id : req.params.id
    }
  })
  .then((cart_items)=>{
    res.send(cart_items);
  })
  .catch((error)=>console.log(error));
});

// POST (agregar nuevo elemento)
router.post("/", (req,res) =>{
  models.cart_items.create({
    user_email : req.body.user_email,
    product_id : req.body.product_id,
    cart_id : req.body.cart_id
  }).then((newItem)=> res.send(newItem));
})

// PUT (editar)
router.put("/:id", function (req, res, next) {
  models.cart_items.update({
    product_id : req.body.product_id,
  },
  {
    where:{
      id: req.params.id
    }
  }).then(()=>res.send("Item editado"))
});

// DELETE
router.delete("/:id", function (req, res, next) {
  models.cart_items.destroy({
    where: {
      id : req.params.id
    }
  }).then(()=> res.send("Item Eliminado"))
  .catch((error)=> console.log(error));
});

module.exports = router;
