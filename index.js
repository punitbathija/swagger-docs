const express = require("express");
const app = express();
const swaggerUI = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./swagger.yaml");
const PORT = 4000;
const fileUpload = require("express-fileupload");

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use(express.json());
app.use(fileUpload());

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
}); // sending string

app.get("/api/v1/appobject", (req, res) => {
  const sampleJSON = {
    id: "55",
    name: "learn Backed",
    price: "999",
  };
  res.json(sampleJSON);
}); // sending object

app.get("/api/v1/courses", (req, res) => {
  res.send(courses);
}); // sending array

app.get("/api/v1/mycourse/:courseId", (req, res) => {
  const mycourse = courses.find((course) => course.id === req.params.courseId);
  res.send(mycourse);
}); //

app.post("/api/v1/addCourse", (req, res) => {
  console.log(req.body);
  courses.push(req.body);
  res.send(true);
});

app.get("/api/v1/courseQuery", (req, res) => {
  let location = req.query.location;
  let device = req.query.device;
  let name = req.query.name;
  let age = req.query.age;
  let gender = req.query.gender;
  res.send({ location, device, name, age, gender });
});

app.post("/api/v1/coursesUpload", (req, res) => {
  const file = req.files.file;
  const path = __dirname + "/images" + Date.now() + ".jpg";

  file.mv(path, (err) => {
    res.send(true);
  });
});

app.listen(PORT, () => {
  console.log(`App is tuning on Port ${PORT}`);
});
