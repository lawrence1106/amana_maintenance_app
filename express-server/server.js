const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { version } = require("react");
const mysql = require("mysql2");
const bcrypt = require("bcrypt");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "amana_operations",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const app = express();
app.use(cors());
app.use(express.static("views"));
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.cookie("cookieName", "cookieValue");
  res.send(__dirname + "views/index.html");
});

app.listen("4000", function () {
  console.log(`server is now running at port 4000`);
});

app.post("/addUser", async function (req, res) {
  res.setHeader("Content-Type", "application/json");
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const emailAddress = req.body.emailAddress;
  const employeeId = req.body.employeeId;
  const userName = req.body.userName;
  const password = req.body.passWord;
  const role = req.body.role;
  const saltRounds = 10;
  let cryptedPass = await bcrypt
    .hash(password, saltRounds)
    .then(function (hash) {
      return hash;
    });
  pool.query(
    "INSERT INTO tbl_users(username, password, first_name, last_name, email_address, employee_id, user_role)VALUES(?,?,?,?,?,?,?)",
    [
      userName,
      cryptedPass,
      firstName,
      lastName,
      emailAddress,
      employeeId,
      role,
    ],
    function (err, results, fields) {
      if (err) {
        res.send({ err: "Oops! Something went wrong!" });
      } else {
        res.send({ status: true });
      }
    }
  );
});
app.post("/userValidation", async function (req, res) {
  res.setHeader("Content-Type", "application/json");
  const { username, password } = req.body;
  pool.query(
    "SELECT * FROM `tbl_users` WHERE `username` = ?",
    [username],
    function (err, results) {
      if (results.length > 0) {
        let dbPass = results[0]["password"];
        let userRole = results[0]["user_role"];
        bcrypt.compare(password, dbPass).then(function (result) {
          res.send({ result: result, username: username, role: userRole });
        });
      } else {
        res.send({ err: true });
      }
    }
  );
});
