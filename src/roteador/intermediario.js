const { banco } = require('../bancoDeDados/bancodedados')
let { senha } = banco


const checarSenha = async (req, res, next) => {
    const { senha_banco } = req.query

    if (senha_banco === senha) {
        return next()
    }

    if (String(senha_banco)) {
        return res.status(403).json({ mensagem: "A senha do banco informada é inválida!" })
    }
    if (!senha_banco) {
        return res.status(400).json({ mensagem: 'informe a senha!' })
    }

}

module.exports = { checarSenha }