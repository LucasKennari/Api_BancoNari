const knex = require('../../conexao/conexao')

const obterPerfil = async (login, email) => {
          const usuario = 
          await knex('usuarios').select('*')
          .where('login', login)
          .first()
         const senhaCriptografada = usuario.senha
         const {senha: _,...perfil} = usuario
        
    return {perfil , senhaCriptografada}
}

module.exports = {
          obterPerfil
}