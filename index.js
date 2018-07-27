// initialize server
const express = require("express");
const server = express();

// import databases
const actionModel = require("./data/helpers/actionModel");
const projectModel = require("./data/helpers/projectModel");

// use middleware

// create endpoints
// projects

// actions

// catch all 404
server.use(function(req, res) {
  res.status(404).send("ERROR: FILE NOT FOUND");
});

server.listen(8000, () => console.log("\n ==API RUNNING ON PORT 8000== \n"));
