const express = require("express");
const app = express();
const swaggerUI = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./swagger.yaml");
const PORT = 4000;

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

let courses = [
  {
    id: "11",
    name: "Learn React JS",
    price: 299,
  },
  {
    id: "22",
    name: "Learn Pro Backend - JS",
    price: 399,
  },
  {
    id: "33",
    name: "Learn Mongo DB",
    price: 199,
  },
];

app.get("/api/v1/app", (req, res) => {
  res.send("Hello From Punit's App");
});

app.get("/api/v1/appobject", (req, res) => {
  const sampleJSON = {
    id: "55",
    name: "learn Backed",
    price: "999",
  };
  res.json(sampleJSON);
});

app.get("/api/v1/courses", (req, res) => {
  res.send(courses);
});

app.listen(PORT, () => {
  console.log(`App is tuning on Port ${PORT}`);
});
