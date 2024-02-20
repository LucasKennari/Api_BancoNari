const knex = require('../../conexao/conexao')

const verificarLoginExistente = async(login) =>{
          const loginExistente = await knex('usuarios').select('login').where('login', login).first()
          console.log(loginExistente)
          return !!loginExistente
}
const verificarEmailExistente = async(email) =>{
          const emailExistente = await knex('usuarios').select('email').where('email', email).first()
          console.log(emailExistente)
          return !!emailExistente
}

module.exports = {
          verificarLoginExistente,
          verificarEmailExistente
}