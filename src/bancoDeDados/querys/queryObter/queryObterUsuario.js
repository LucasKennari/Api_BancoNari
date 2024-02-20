const knex = require('../../conexao/conexao')

const obterPerfil = async (login, email) => {
          const perfil = 
          await knex('usuarios')
          .where({login})
          .first()
          return perfil
}

module.exports = {
          obterPerfil
}