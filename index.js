// initialize server
const express = require("express");
const server = express();

// import databases
const actionModel = require("./data/helpers/actionModel");
const projectModel = require("./data/helpers/projectModel");

// use middleware
server.use(express.json());

// create endpoints
// projects
server.get("/api/projects", async (req, res) => {
  try {
    const response = await projectModel.get();
    res.status(200).send(response);
  } catch (error) {
    res
      .status(500)
      .send({ message: "ERROR PROCESSING REQUEST", error: error.message });
  }
});

server.get("/api/projects/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const response = await projectModel.get(id);
    res.status(200).send(response);
  } catch (error) {
    res
      .status(500)
      .send({ message: "ERROR PROCESSING REQUEST", error: error.message });
  }
});

server.get("/api/projects/:id/actions", async (req, res) => {
  try {
    const id = req.params.id;
    const response = await projectModel.getProjectActions(id);
    res.status(200).send(response);
  } catch (error) {
    res
      .status(500)
      .send({ message: "ERROR PROCESSING REQUEST", error: error.message });
  }
});

server.post("/api/projects", async (req, res) => {
  // TODO: add validation
  try {
    const project = req.body;
    const response = await projectModel.insert(project);
    res.status(200).send(response);
  } catch (error) {
    res
      .status(500)
      .send({ message: "ERROR PROCESSING REQUEST", error: error.message });
  }
});

server.put("/api/projects/:id", async (req, res) => {
  try {
    // TODO: add validation
    const id = req.params.id;
    const changes = req.body;
    const response = await projectModel.update(id, changes);
    res.status(200).send(response);
  } catch (error) {
    res
      .status(500)
      .send({ message: "ERROR PROCESSING REQUEST", error: error.message });
  }
});

server.delete("/api/projects/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const response = await projectModel.remove(id);
    res.status(200).send(response);
  } catch (error) {
    res
      .status(500)
      .send({ message: "ERROR PROCESSING REQUEST", error: error.message });
  }
});

// actions

// catch all 404
server.use(function(req, res) {
  res.status(404).send("ERROR: FILE NOT FOUND");
});

server.listen(8000, () => console.log("\n ==API RUNNING ON PORT 8000== \n"));
