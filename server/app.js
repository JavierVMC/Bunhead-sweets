var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var productsRouter = require('./routes/product');
var productCategoriesRouter = require('./routes/product_category');
var usersRouter = require('./routes/user');
var authRouter = require('./routes/auth');
var imagesRouter = require('./routes/images');
var reportRouter = require('./routes/report');
var barChartRouter = require('./routes/bar_chart');
var pieChartRouter = require('./routes/pie_chart');
var lineChartRouter = require('./routes/line_chart');
var ordersRouter=require("./routes/order");


var app = express();

app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  cookieSession({
    name: 'session',
    keys: ['DAWM-bunhead-sweets'],

    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  })
);
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', indexRouter);
app.use('/api/product', productsRouter);
app.use('/api/product_category', productCategoriesRouter);
app.use('/api/user', usersRouter);
app.use('/api/auth', authRouter);
app.use('/api/image', imagesRouter);
app.use('/api/report', reportRouter);
app.use('/api/bar_chart', barChartRouter);
app.use('/api/pie_chart', pieChartRouter);
app.use('/api/line_chart', lineChartRouter);
app.use("/api/order",ordersRouter);

module.exports = app;
