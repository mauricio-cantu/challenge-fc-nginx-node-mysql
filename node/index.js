import express from "express";
import mysql from "mysql";

const app = express();
const port = 3000;

const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
};

const insertSql = `INSERT INTO people(name) VALUES ('New visitor');`;

const selectSql = "SELECT id, name FROM people;";

app.get("/", (req, res) => {
  const conn = mysql.createConnection(config);

  conn.query(insertSql);

  conn.query(selectSql, (err, result) => {
    if (err) throw err;
    res.send(`
      <h1>Full cycle!!</h1>
      <br />
      <ul>
        ${result.map((item) => `<li>${item.name} (${item.id})</li>`)}
      </ul>
    `);
  });
});

app.listen(port, () => {
  console.log(`Rodando na porta ${port}`);
});
