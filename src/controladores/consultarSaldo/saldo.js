const { contas } = require("../../bancoDeDados/bancodedados")
const { buscarConta } = require("../utilidades/pegarConta")


const consultarSaldo = async (req, res) => {
    const { numero_conta, senha } = req.query


    if (!numero_conta || !Number(senha)) {
        return res.status(404).json({ mensagem: "Por favor informe a senha e o numero da conta" })
    }
    const conta = await buscarConta(contas, numero_conta)
    const { usuario } = conta

    if (!conta) {
        res.status(400).json({ mensagem: "Conta bancária não encontada!" })
    }
    if (usuario.senha !== Number(senha)) {
        return res.status(400).json({ mensagme: "Senha errada, tente de novo" })
    }

    res.status(200).json({ saldo: conta.saldo })
}

module.exports = {
    consultarSaldo
}