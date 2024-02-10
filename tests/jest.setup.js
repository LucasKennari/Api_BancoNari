const supertest = require("supertest");
const { server } = require("../src/server/server");
const testServer = supertest(server);
module.exports = testServer;
