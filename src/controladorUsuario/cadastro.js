const { verificarEmailExistente,
    cadastroEfetuado,
    verificarLoginExistente } = require('../bancoDeDados/query');
const senhaCripto = require('./senhaCript');

const cadastro = async (req, res) => {
    const { login, nome, email, senha } = req.body
    try {

        const rowLogin = verificarLoginExistente(login)
        const { rowCount: loginRowCount } = rowLogin
        if (loginRowCount === 1) {
            return res.status(400).json({ mensagem: "tente outro login." })
        }


        const row = await verificarEmailExistente(email)
        const { rowCount: emailRowCount } = row

        if (emailRowCount === 1) {
            return res.status(400).json({ mensagem: "tente outro email." })
        }


        const senhaCriptografada = await senhaCripto(senha)
        const perfil = await cadastroEfetuado(
            login, nome, email, senhaCriptografada)


        return res.status(201).json(perfil)

    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ mensagem: "Erro interno do servidor!" })
    }

}
module.exports = cadastro