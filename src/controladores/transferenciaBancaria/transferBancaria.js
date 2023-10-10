const { contas, transferencias } = require("../../bancoDeDados/bancodedados");
const { verificarBody } = require("../utilidades/checarCampos");
const { registrarData } = require("../utilidades/registrarData");

const transferBancaria = async (req, res) => {
    const { numero_conta_origem,
        numero_conta_destino,
        valor,
        senha
    } = req.body
    const contaOrigem = await contas.find(conta =>
        conta.numero === Number(numero_conta_origem))



    const contaDestino = await contas.find(conta =>
        conta.numero === Number(numero_conta_destino))


    //validacoes
    const verifica = await verificarBody(numero_conta_origem,
        numero_conta_destino,
        valor,
        senha)

    if (!verifica) {
        return res.status(400).json({ mensagme: "todos os campos no body são obrigatórios" })
    }
    if (!contaOrigem || !contaDestino) {
        return res.status(404).json({ mensagem: "Conta não encontrada" })
    }
    //e se a senha for letra?
    if (Number(senha) !== contaOrigem.usuario.senha) {
        return res.status(400).json({ mensagme: "Senha errada, tente de novo" })
    }
    if ((contaOrigem.saldo / 100) < Number(valor)) {
        return res.status(400).json({ mensagme: "Saldo insuficiente" })
    }
    //

    contaOrigem.saldo -= Number(valor) * 100
    contaDestino.saldo += Number(valor) * 100

    //criando registro

    transferencias.push({
        data: registrarData(),
        numero_conta_origem,
        numero_conta_destino,
        valor
    })
    return res.status(202).send()
}

module.exports = {
    transferBancaria
}