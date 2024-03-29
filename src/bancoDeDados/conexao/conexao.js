const { path } = require("node:path");
require("path").dirname("../../../env");
const knex = require("knex")({
     client: "pg",
     connection: {
          host: process.env.DB_HOST,
          port: process.env.DB_PORT,
          user: process.env.DB_USER,
          password: process.env.DB_PASS,
          database: process.env.DB_NAME,
     },
});

module.exports = knex;

// const { Pool } = require('pg')
// const pool = new Pool({
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASS,
//     database: process.env.DB_NAME,
// })

// module.exports = pool
