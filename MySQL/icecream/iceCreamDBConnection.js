var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "ice_creamDB"
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  // connection.end();
  afterConnection();
  selectAll();
  insertProduct();
});

function selectAll() {
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    console.log(res);
    connection.end;
  });
}

function afterConnection() {
  connection.query("SHOW TABLES", function (err, res) {
    if (err) throw err;
    console.log(res);
    connection.end;
  });
}

function insertProduct() {
  const query = connection.query(
    "INSERT INTO products set ?",
    {
      flavor: "Rocky Road",
      price: 3.0,
      quantity: 50,
    }, function (err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " product inserted!")
      selectAll();
    }
  )
}