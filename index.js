const express = require("express");
const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());

const calculadoraRoute = require("./src/routes/calculadora");

app.use(calculadoraRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
