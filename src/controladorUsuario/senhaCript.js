const bcrypt = require('bcrypt')
const saltRounds = 10
const senhaCripto = async (senha) => {
    try {
        const senhaGerada = await bcrypt.hash(senha, saltRounds)
        return senhaGerada
    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno do servidor!" })
    }
}

module.exports = senhaCripto