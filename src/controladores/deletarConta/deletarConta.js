const { contas } = require('../../bancoDeDados/bancodedados')
const { buscarConta } = require('../utilidades/pegarConta')

const deletarConta = async (req, res) => {
    const { numeroConta } = req.params

    if (isNaN(numeroConta)) {
        return res.status(404).json({ mensagem: "Digite um número válido!" })
    }

    const buscarAcc = buscarConta(contas, numeroConta)
    if (!buscarAcc) {
        return res.status(404).json({ mensagem: "conta não encontrada!" })
    }

    if (buscarAcc.saldo !== 0) {
        return res.status(404).json({ "mensagem": "A conta só pode ser removida se o saldo for zero!" })
    }
    if (buscarAcc.saldo === 0) {
        contas.splice(buscarAcc, 1)
        return res.status(204).json({ contas })
    }
}
module.exports = { deletarConta }