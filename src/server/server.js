require('dotenv').config()
const express = require('express')
const { rotas } = require('./src/roteador/rotas')
const server = express()
const port = process.env.PORT || 3000

//intermediarios//

server.use(express.json())
server.use(rotas)

export {server}