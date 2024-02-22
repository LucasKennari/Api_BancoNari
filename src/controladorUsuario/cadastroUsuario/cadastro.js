const {
     cadastrarUsuario,
} = require("../../bancoDeDados/querys/queryCadastrar/queryCadastrar");
const {
     verificarLoginExistente,
     verificarEmailExistente,
} = require("../../bancoDeDados/querys/queryVerificar/queryVerificar");

const cadastro = async (req, res) => {
     const { login, nome, email, senha } = req.body;
     try {
          const existeLogin = await verificarLoginExistente(login);

          if (existeLogin) {
               return res
                    .status(400)
                    .json({ mensagem: "Email ou Login inválidos" });
          }

          const existeEmail = await verificarEmailExistente(email);

          if (existeEmail) {
               return res
                    .status(400)
                    .json({ mensagem: "Email ou Login inválidos" });
          }

          const perfil = await cadastrarUsuario(login, nome, email, senha);

          return res.status(201).json(perfil.id);
     } catch (error) {
          console.log(error.message);
          return res
               .status(500)
               .json({ mensagem: "Erro interno do servidor!" });
     }
};
module.exports = cadastro;
