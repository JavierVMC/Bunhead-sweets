var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

var indexRouter = require("./routes/index");
var productsRouter = require("./routes/product");
var usersRouter = require("./routes/user");
var authRouter = require("./routes/auth");

var app = express();

app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api", indexRouter);
app.use("/api/product", productsRouter);
app.use("/api/user", usersRouter);
app.use("/api/auth", authRouter);

module.exports = app;
