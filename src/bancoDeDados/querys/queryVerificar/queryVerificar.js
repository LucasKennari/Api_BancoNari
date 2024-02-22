const knex = require("../../conexao/conexao");

const verificarLoginExistente = async (login) => {
     try {
          const loginExistente = await knex("usuarios")
               .select("login")
               .where("login", login)
               .first();

          return !!loginExistente;
     } catch (err) {
          console.log(err.message);
     }
};
const verificarEmailExistente = async (email) => {
     try {
          const emailExistente = await knex("usuarios")
               .select("email")
               .where("email", email)
               .first();

          return !!emailExistente;
     } catch (err) {
          console.log(err.message);
     }
};

module.exports = {
     verificarLoginExistente,
     verificarEmailExistente,
};
