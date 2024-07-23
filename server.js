const express = require("express");
const path = require("path");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(express.static(path.join(__dirname, "build")));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: "sql5.freesqldatabase.com",
  user: "sql5720774",
  password: "LSl29UCu8G",
  database: "sql5720774",
  port: 3306,
});

db.connect((err) => {
  if (err) {
    console.log("Error connecting to database: " + err.stack);
    return;
  }
  console.log("Connected to database");
});

app.get("/all-products", (req, res) => {
  const sql = "SELECT * FROM `Products`";
  db.query(sql, function (err, data) {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.listen(3306, () => {
  console.log("Server started on port 3306");
});
