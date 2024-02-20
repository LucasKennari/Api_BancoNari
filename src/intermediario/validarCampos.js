const { verificarEmailExistente } = require('../bancoDeDados/querys/query')

const tamanhoDaSenha = 3

async function validarCampos(req, res, next) {
    const { nome, email, senha } = req.body
    const verificarEmail = email.includes("@")
    try {

        if (senha.length < tamanhoDaSenha) {
            return res.status(400).json({ mensagme: 'Senha deverar conter no minimo 10 caracteres' })
        }
        if (!nome.trim(" ") || !email.trim(" ") || !senha.trim(" ") || !verificarEmail) {
            return res.status(400).json({ mensagme: 'todos os campos são obrigatórios!' })

        }
        next()
    } catch (error) {
        return res.status(500).json({ error: 'Erro interno do servidor.' })
    }
}

module.exports = validarCampos 