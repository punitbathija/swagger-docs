const express = require("express");
const app = express();
const swaggerUI = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./swagger.yaml");
const PORT = 4000;

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.get("/", (req, res) => {
  res.send("Hello From Punit's App");
});

app.listen(PORT, () => {
  console.log(`App is tuning on Port ${PORT}`);
});
