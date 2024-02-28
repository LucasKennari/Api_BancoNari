const senhaCripto = require("../../../controladorUsuario/senhaCript");
const knex = require("../../conexao/conexao");

const cadastrarUsuario = async (login, nome, email, senha) => {
     const senhaCriptografada = await senhaCripto(senha);

     try {
          const cadastro = await knex("usuarios")
               .insert({
                    login: login,
                    nome: nome,
                    email: email,
                    senha: senhaCriptografada,
                    conta_ativa: true,
               })
               .returning("id");

          return cadastro[0];
     } catch (error) {
          console.log(error.menssge);
     }
};

module.exports = {
     cadastrarUsuario,
};
