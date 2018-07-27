// initialize server
const express = require("express");
const server = express();
const cors = require("cors");

// import databases
const actionModel = require("./data/helpers/actionModel");
const projectModel = require("./data/helpers/projectModel");

// use middleware
server.use(express.json());
server.use(cors());

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
  if (
    req.body.name.length < 1 ||
    req.body.name.length > 128 ||
    !"description" in req.body
  ) {
    res.status(400).send({
      message:
        "Please make sure the submitted name is present and less than 128 characters, that a description is present, and that there is a comleted flag with true or false"
    });
  }
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
  if (
    req.body.name.length < 1 ||
    req.body.name.length > 128 ||
    !"description" in req.body
  ) {
    res.status(400).send({
      message:
        "Please make sure the submitted name is present and less than 128 characters, that a description is present, and that there is a comleted flag with true or false"
    });
  }
  try {
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
server.get("/api/actions", async (req, res) => {
  try {
    const response = await actionModel.get();
    res.status(200).send(response);
  } catch (error) {
    res
      .status(500)
      .send({ message: "ERROR PROCESSING REQUEST", error: error.message });
  }
});

server.get("/api/actions/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const response = await actionModel.get(id);
    res.status(200).send(response);
  } catch (error) {
    res
      .status(500)
      .send({ message: "ERROR PROCESSING REQUEST", error: error.message });
  }
});

server.post("/api/actions", async (req, res) => {
  if (
    !"project_id" in req.body ||
    req.body.name.description < 1 ||
    req.body.name.description > 128
  ) {
    res.status(400).send({
      message:
        "Please make sure you entered a valid project_id for this action, and make sure your description is present and less than 128 characters"
    });
  }
  try {
    const action = res.body;
    const response = await actionModel.insert(action);
    res.status(200).send(response);
  } catch (error) {
    res
      .status(500)
      .send({ message: "ERROR PROCESSING REQUEST", error: error.message });
  }
});

server.put("/api/actions/id:", async (req, res) => {
  if (
    !"project_id" in req.body ||
    req.body.name.description < 1 ||
    req.body.name.description > 128
  ) {
    res.status(400).send({
      message:
        "Please make sure you entered a valid project_id for this action, and make sure your description is present and less than 128 characters"
    });
  }
  try {
    const id = req.params.id;
    const changes = req.body;
    const response = await actionModel.update(id, changes);
    res.status(200).send(response);
  } catch (error) {
    res
      .status(500)
      .send({ message: "ERROR PROCESSING REQUEST", error: error.message });
  }
});

server.delete("/api/actions/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const response = await actionModel.remove(id);
    res.status(200).send(response);
  } catch (error) {
    res
      .status(500)
      .send({ message: "ERROR PROCESSING REQUEST", error: error.message });
  }
});

// catch all 404
server.use(function(req, res) {
  res.status(404).send("ERROR: FILE NOT FOUND");
});

server.listen(8000, () => console.log("\n ==API RUNNING ON PORT 8000== \n"));
