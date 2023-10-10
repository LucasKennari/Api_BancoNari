const { contas, depositos, saques, transferencias } = require("../../bancoDeDados/bancodedados")
const { buscarConta } = require("../utilidades/pegarConta")


const extratoBancario = async (req, res) => {
    const { numero_conta, senha } = req.query

    if (!numero_conta || !senha) {
        return res.status(404).json({ mensagem: "Por favor informe a senha e o numero da conta" })
    }
    const conta = await buscarConta(contas, numero_conta)
    const transferenciaEnviada = transferencias.filter(transferencias => Number(transferencias.numero_conta_origem) === conta.numero)
    const transferenciaRecebidas = transferencias.filter(transferencias => Number(transferencias.numero_conta_destino) === conta.numero)

    const { usuario } = conta

    if (!conta) {
        res.status(400).json({ mensagem: "Conta bancária não encontada!" })
    }
    if (usuario.senha !== Number(senha)) {
        return res.status(400).json({ mensagme: "Senha errada, tente de novo" })
    }

    res.status(200).json({
        depositos,
        saques,
        transferenciaEnviada,
        transferenciaRecebidas

    })

}

module.exports = {
    extratoBancario
}