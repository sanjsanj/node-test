const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/users", (req, res) => {
  res.send([
    {
      name: "Bob",
      age: 25
    },
    {
      name: "Sue",
      age: 41
    }
  ]);
});

app.listen(3000);

module.exports.app = app;
