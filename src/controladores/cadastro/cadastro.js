

const { contas } = require('../../bancoDeDados/bancodedados')
const { checarCampos, checarCpf } = require('../utilidades/checarCampos')
const { numero } = require('../utilidades/criarNumeroUnico')



const criarConta = async (req, res) => {

    const { nome, cpf, data_nascimento, telefone, email, senha } = req.body
    const usuario = { nome, cpf, data_nascimento, telefone, email, senha }


    contas.push({
        numero: numero(),
        saldo: 0,
        usuario
    })

    return res.status(201).send()

}

module.exports = {
    criarConta
}

