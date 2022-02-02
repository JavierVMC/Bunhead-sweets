// Cunado pongas los objetos en postman ponerle comillas a las propiedades tambien
//1. En postman hacer post a la url "http://localhost:3001/api/bar_chart" pasando en el body el siguiente objeto (solo el objeto sin el const variable =):
const bar_chart = {
  name: "BarChart de prueba",
  data: [
    { year: 2010, value: 300 },
    { year: 2011, value: 150 },
    { year: 2012, value: 140 },
    { year: 2013, value: 250 },
    { year: 2014, value: 320 },
    { year: 2015, value: 100 },
    { year: 2016, value: 40 },
    { year: 2017, value: 150 },
    { year: 2018, value: 300 },
    { year: 2019, value: 500 },
  ],
};
//2. En postman hacer post a la url "http://localhost:3001/api/line_chart" pasando en el body el siguiente objeto:
const line_chart = {
  name: "LineChart de prueba",
  data: [
    { name: "Jan", value: 30 },
    { name: "Feb", value: 10 },
    { name: "Mar", value: 50 },
    { name: "Apr", value: 20 },
    { name: "May", value: 80 },
    { name: "Jun", value: 30 },
    { name: "July", value: 0 },
    { name: "Aug", value: 20 },
    { name: "Sep", value: 100 },
    { name: "Oct", value: 55 },
    { name: "Nov", value: 60 },
    { name: "Dec", value: 80 },
  ],
};

//3. En postman hacer post a la url "http://localhost:3001/api/pie_chart" pasando en el body el siguiente objeto:
const pie_chart = {
  name: "PieChart de prueba",
  data: [
    { label: "Tortas", value: 30 },
    { label: "Cupcakes", value: 25 },
    { label: "Brownies", value: 10 },
    { label: "Panes", value: 15 },
    { label: "Galletas", value: 20 },
  ],
};

//3. En postman en pre-request-script poner lo siguiente:
var current_timestamp = new Date();
postman.setEnvironmentVariable(
  "current_timestamp",
  current_timestamp.toISOString()
);
var current_timestamp2 = new Date();
postman.setEnvironmentVariable(
  "current_timestamp2",
  current_timestamp2.toISOString()
);
//4. En postman hacer post a la url "http://localhost:3001/api/report" pasando en el body el siguiente objeto:
const report = {
  title: "Reporte 1",
  from: "{{current_timestamp}}",
  to: "{{current_timestamp}}",
  total_incomes: 100,
  products_sold: [
    { product_name: "Pastel de vainilla", quantity: 1, price: 20 },
    { product_name: "Pastel de chocolate", quantity: 4, price: 20 },
    { product_name: "Cupcakes", quantity: 1, price: 10 },
    { product_name: "Galletas", quantity: 1, price: 10 },
  ],
};
