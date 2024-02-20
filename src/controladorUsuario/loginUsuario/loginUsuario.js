const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt')
const { verificarLoginExistente } = require
("../../bancoDeDados/querys/queryVerificar/queryVerificar");
const { obterPerfil } = require("../../bancoDeDados/querys/queryObter/queryObterUsuario");

const loginUsuario = async (req, res) => {
     const { login, senha } = req.body;
     // verificar se esse login existe no banco de dados
     // verificar se essa senha está correta
     try{
               const {perfil , senhaCriptografada} = await obterPerfil(login)

               const verificarLogin = await verificarLoginExistente(login)
               const senhaCorreta = await bcrypt.compare(senha,senhaCriptografada)
      
               if(!verificarLogin) {
                    return res.status(404).json({Mensagem: 'Login ou Senha inválidos'})
               }
               
              if(!senhaCorreta){
                    return res.status(404).json({Mensagem: 'Login ou Senha inválidos'})
              }
          
               const token = jwt.sign({ senha }, process.env.PRIVATEKEY, {
                    expiresIn: "48h",
               });
               const usuario  = {...perfil, token}

               res.status(200).json(usuario)
          
     }catch(error){
          console.log(error.message)
          return res.status(500).json({Error: "Erro interno do servidor!"})
     }
};
module.exports = { loginUsuario };
