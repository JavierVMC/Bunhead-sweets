var DataTypes = require("sequelize").DataTypes;
var _cart_items = require("./cart_items");
var _carts = require("./carts");
var _order_items = require("./order_items");
var _orders = require("./orders");
var _payment_details = require("./payment_details");
var _product_categories = require("./product_categories");
var _products = require("./products");
var _user_payments = require("./user_payments");
var _users = require("./users");

function initModels(sequelize) {
  var cart_items = _cart_items(sequelize, DataTypes);
  var carts = _carts(sequelize, DataTypes);
  var order_items = _order_items(sequelize, DataTypes);
  var orders = _orders(sequelize, DataTypes);
  var payment_details = _payment_details(sequelize, DataTypes);
  var product_categories = _product_categories(sequelize, DataTypes);
  var products = _products(sequelize, DataTypes);
  var user_payments = _user_payments(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  cart_items.belongsTo(carts, { as: "cart", foreignKey: "cart_id"});
  carts.hasMany(cart_items, { as: "cart_items", foreignKey: "cart_id"});
  order_items.belongsTo(orders, { as: "order", foreignKey: "order_id"});
  orders.hasMany(order_items, { as: "order_items", foreignKey: "order_id"});
  orders.belongsTo(payment_details, { as: "card_number_payment_detail", foreignKey: "card_number"});
  payment_details.hasMany(orders, { as: "orders", foreignKey: "card_number"});
  products.belongsTo(product_categories, { as: "category", foreignKey: "category_id"});
  product_categories.hasMany(products, { as: "products", foreignKey: "category_id"});
  cart_items.belongsTo(products, { as: "product", foreignKey: "product_id"});
  products.hasMany(cart_items, { as: "cart_items", foreignKey: "product_id"});
  order_items.belongsTo(products, { as: "product", foreignKey: "product_id"});
  products.hasMany(order_items, { as: "order_items", foreignKey: "product_id"});
  orders.belongsTo(users, { as: "user_email_user", foreignKey: "user_email"});
  users.hasMany(orders, { as: "orders", foreignKey: "user_email"});
  user_payments.belongsTo(users, { as: "user_email_user", foreignKey: "user_email"});
  users.hasMany(user_payments, { as: "user_payments", foreignKey: "user_email"});

  return {
    cart_items,
    carts,
    order_items,
    orders,
    payment_details,
    product_categories,
    products,
    user_payments,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
