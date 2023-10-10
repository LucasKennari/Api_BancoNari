
const { contas, depositos } = require('../../bancoDeDados/bancodedados')
const { buscarConta } = require('../utilidades/pegarConta')
const { registrarData } = require('../utilidades/registrarData')


const depositarConta = async (req, res) => {

    let { numero_conta, valor } = req.body

    if (isNaN(numero_conta)) {
        return res.status(400).json({ mensagem: "Digite um número válido!" })
    }
    if (!valor) {
        return res.status(400).json({ mensagem: "Digite um número válido!" })
    }
    const buscarAcc = await buscarConta(contas, numero_conta)

    if (!buscarAcc) {
        return res.status(404).json({ mensagem: "conta não encontrada!" })
    }

    if (valor === 0 || valor <= -1) {
        return res.status(404).json({ mensagem: "Valor minimo de deposito: R$ 100" })
    }


    buscarAcc.saldo += Number(valor) * 100

    depositos.push({
        data: registrarData(),
        numero_conta,
        valor,

    })

    return res.status(202).send()

}

module.exports = {
    depositarConta
}