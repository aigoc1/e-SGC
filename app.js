const express = require("express");
const app = express();
const PORT = 3000;
const pool = require("./database/database");
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.get("/", function (req, res) {
//     res.json("conectado po vc");
//   });

app.get("/todos", function (req, res) {

    let campo1 = req.body

  sql = "select * from  conta.conta";


  pool.query(sql, (err, results)=> {
    if (err) {
      console.log(err);
    } else {
      res.render("index", { dados: results.rows });
      //   res.json(results.rows);
    }
  });
});

app.listen(PORT, function () {
  console.log("conectado por mim m");
});
