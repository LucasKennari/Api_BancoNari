const { contas, saques } = require("../../bancoDeDados/bancodedados")
const { buscarConta } = require("../utilidades/pegarConta")
const { registrarData } = require("../utilidades/registrarData")


const sacarDaConta = async (req, res) => {
    const { numero_conta, valor, senha } = req.body

    if (!numero_conta || isNaN(numero_conta)) {
        return res.status(400).json(`O numero é obrigatório`)
    }
    if (!valor || valor <= -1 || 0) {
        return res.status(400).json(`O valor é obrigatório`)
    }
    if (!senha || !senha.trim()) {
        return res.status(400).json(`A senha é obrigatória`)
    }

    const buscarAcc = await buscarConta(contas, numero_conta)
    const { usuario } = buscarAcc

    if (!buscarAcc) {
        return res.status(404).json({ mensagem: 'Conta não encontrada!' })
    }

    if (Number(senha) !== usuario.senha) {
        return res.status(405).json({ mensagem: 'Senha inválida!' })
    }
    if (buscarAcc.saldo < valor) {
        return res.status(400).json({ mensagem: 'Saldo insuficiente' })
    }

    buscarAcc.saldo -= valor * 100

    saques.push({
        data: registrarData(),
        numero_conta,
        valor,

    })
    return res.status(202).send()
}

module.exports = { sacarDaConta }