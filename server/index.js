const express = require("express");
const app = express();
const port = 3300;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port hi ${port}`);
});
