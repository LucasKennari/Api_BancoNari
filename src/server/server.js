require("dotenv").config();
const express = require("express");
const rotas = require("../roteador/rotas");
const server = express();

//intermediarios//

server.use(express.json());
server.use(rotas);

module.exports = { server };
