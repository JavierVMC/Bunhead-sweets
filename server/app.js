var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');
// Importing express-session module
const session = require('express-session');
// Importing file-store module
const Filestore = require('session-file-store')(session);
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
var cartRouter = require('./routes/cart');
var cartItemsRouter = require('./routes/cart_item');
var ordersRouter = require('./routes/order');
var orderItemsRouter = require('./routes/order_item')
var app = express();

app.use(
  cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
  })
);

app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.set('trust proxy', 1); // trust first proxy
app.use(
  session({
    name: `daffyduck`,
    secret: 'some-secret-example',
    resave: false,
    saveUninitialized: false,
    store: new Filestore(),
    cookie: {
      secure: false, // This will only work if you have https enabled!
      maxAge: 600000 // 1 min
    }
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
app.use('/api/cart',cartRouter);
app.use('/api/cart_items',cartItemsRouter);
app.use('/api/order', ordersRouter);
app.use('/api/order_items',orderItemsRouter);
module.exports = app;
