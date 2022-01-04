var express = require("express");
var bcrypt = require("bcrypt");

const sequelize = require("../models/index.js").sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize);

var router = express.Router();

router.post("/login", function (req, res, next) {
  const user_email = req.body.user_email;
  const password = req.body.password;

  models.users
    .findAll({
      where: {
        user_email: user_email,
      },
    })
    .then((users) => {
      const user = users[0];
      if (user) {
        bcrypt.compare(password, user.password, function (err, result) {
          if (err) {
            res.json({
              error: err,
            });
          }
          if (result) {
            req.session.usuario = user;
            res.status(200).json(user);
          } else {
            req.session = null;
            res.status(200).json({
              message: "Password does not match",
            });
          }
        });
      } else {
        res.json({
          message: "No user found",
        });
      }
    });
});

module.exports = router;
