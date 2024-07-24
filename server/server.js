const express = require("express");
const path = require("path");
const app = express();
const api = express.Router();
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

app.use(cors());
app.use(express.static(path.join(__dirname, "../client/build")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//initialize api route
app.use("/api", api);

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

db.connect((err) => {
  if (err) {
    console.log("Error connecting to database: " + err.stack);
    return;
  }
  console.log("Connected to database");
});
//creating the endpoint for the api route
//root/api/products
//root, means base url, our case localhost:3606/)
api.get("/products", (req, res) => {
  const sql = "SELECT * FROM `Products`";
  db.query(sql, function (err, data) {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});
//render react pages from express
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});
app.listen(process.env.DB_PORT, () => {
  console.log("Server started on port " + process.env.DB_PORT);
});
