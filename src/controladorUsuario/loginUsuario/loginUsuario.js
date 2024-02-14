const jwt = require("jsonwebtoken");
const loginUsuario = (req, res) => {
     const { login, senha } = req.body;
     // verificar se esse login existe no banco de dados
     // verificar se essa senha está correta

     //gerar token

     const token = jwt.sign({ senha }, process.env.PRIVATEKEY, {
          expiresIn: "48h",
     });
     res.status(200).json(token);
     //
};
module.exports = { loginUsuario };
