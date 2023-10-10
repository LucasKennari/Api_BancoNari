require('dotenv').config()
const express = require('express')
const { rotas } = require('./src/roteador/rotas')
const app = express()
const port = process.env.PORT || 3000

//intermediarios//

app.use(express.json())
app.use(rotas)

// porta //
app.listen(port,
    console.log(`SERVIDOR ON NA PORTA ${port}`))