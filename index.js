import { routeHola, routeAPInombres } from "./routes.js";
import express from "express";

const server = express();
const port = 3000;

// normal function, no arrows.....yet
// hola route
server.get("/hello", function (req, res) {
  const response = routeHola(req, res);
  res.send("Hello World!");
});

// APInombres route
server.get("/api/nombres", async function (req, res) {
  let response;
  try {
    response = await routeAPInombres(req, res);
  } catch (error) {
    console.log(error);
  }
  res.send(response);
});

server.listen(port, function () {
  console.log(`Server is running on port ${port}!`);
});
