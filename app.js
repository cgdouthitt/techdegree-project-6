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

//Home route
app.get("/", (req, res) => {
  res.render("index", { projects });
});

//About route
app.get("/about", (req, res) => {
  res.render("about");
});

//Project route based on id
app.get("/projects/:id", (req, res, next) => {
  const id = +req.params.id;
  if (typeof id === "number" && id <= projects.length - 1) {
    const project = projects.find((project) => project.id === id);
    res.render("project", { project });
  } else {
    next();
  }
});

// Error handlers

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error("Looks like this page doesn't exsist.");
  err.status = 404;
  console.log("404 error handler called", err);
  res.status(404).render("page-not-found", { err });
});

// Global error handler
app.use((err, req, res, next) => {
  if (err) {
    console.log("Global error handler called", err);
  }
  if (err.status === 404) {
    res.status(404).render("page-not-found", { err });
  } else {
    err.message = err.message || "Something went wrong with the server.";
    err.status = 500;
    res.status(500).render("error", { err });
  }
});

app.listen(3000);
