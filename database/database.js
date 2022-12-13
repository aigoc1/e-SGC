const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  password: '123',
  host: "localhost",//mude a porta para local host:5434 e quando for 11  port 5432
  database: "teste",
  port: 5434,
});

pool.connect( function(err) {
  if (err) {
    console.log(err)
  } else {
    console.log("conectado ao banco TESTE");
  }
});

module.exports = pool;
