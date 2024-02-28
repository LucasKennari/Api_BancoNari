const knex = require("./src/bancoDeDados/conexao/conexao");

const delESeed = (async function () {
     try {
          await knex.schema.dropTableIfExists("usuarios");
          return knex.schema.createTable("usuarios", (table) => {
               table.increments("id").nullable();
               table.string("login").unique();
               table.string("nome");
               table.string("email").unique();
               table.string("senha");
               table.boolean("conta_ativa");
          });
     } catch (e) {
          console.log(e.message);
     }
})();

module.exports = delESeed;
