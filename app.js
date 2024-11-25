//project requires
const express = require("express");
const { projects } = require("./data.json");
const path = require("path");
const app = express();

//app setup
app.set("view engine", "pug");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "images")));

//Home route
app.get("/", (req, res) => {
  res.render("index", { projects });
});

//About route
app.get("/about", (req, res) => {
  res.render("about");
});

//project route based on id
app.get("/projects/:id", (req, res) => {
  const id = +req.params.id;
  const project = projects.find((project) => project.id === id);
  res.render("project", { project });
});

// error handlers

// catch 404 and forward to error handler
app.use((req, res, next) => {
  console.log("404 error handler called");
  res.status(404).render("page-not-found");
});

// server error handler
app.use((err, req, res, next) => {
  if (err) {
    console.log("Global error handler called", err);
  }
  console.log(err.status);
  if (err.status === 404) {
    res.status(404).render("page-not-found", { err });
  } else {
    err.message = err.message || "Something went wrong with the server.";
    res.status(err.status || 500).render("error", { err });
  }
});

app.listen(3000);
