var express = require("express");
var router = express.Router();

const sequelize = require("../models/index.js").sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize);

// GET all
router.get("/", function (req, res, next) {
  models.carts
    .findAll({})
    .then((carts) => {
      res.send(carts);
    })
    .catch((error) => console.log(error));
});

// GET by id
router.get("/:id", function (req, res, next) {
  models.carts
  .findAll({
    where:{
      user_email : req.params.id
    }
  })
  .then((carts) =>{
    res.send(carts);
  }).catch((error)=> console.log(error));
});

// POST (agregar nuevo elemento)
router.post("/", (req,res) =>{
  models.carts.create({
    user_email : req.body.user_email,
  }).then((newCart)=> res.send(newCart));
})

// PUT (editar)
router.put("/:id", function (req, res, next) {
  models.carts.update({
    user_email : req.body.user_email
  },
  {
    where:{
      id: req.params.id
    }
  }).then(()=>res.send("Carrito editado"))
});

// DELETE
router.delete("/:id", function (req, res, next) {
  models.carts.destroy({
    where: {
      id : req.params.id
    }
  }).then(()=> res.send("Carrito eliminado"))
  .catch((error)=> console.log(error));
});

module.exports = router;
