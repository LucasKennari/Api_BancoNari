const { contas } = require('../../bancoDeDados/bancodedados');
const { buscarConta } = require('../utilidades/pegarConta');

const editarConta = (req, res) => {

    const { numeroConta } = req.params;

    const { nome, cpf, data_nascimento, telefone, email, senha } = req.body
    if (isNaN(numeroConta)) {
        return res.status(400).json({ mensagem: 'insira um número válido!' })
    }
    const buscarAcc = buscarConta(contas, numeroConta)

    if (!buscarAcc) {
        return res.status(404).json({ mensagem: 'Conta não encontrada!' })
    }



    let { usuario } = buscarAcc

    usuario.nome = nome
    usuario.cpf = cpf
    usuario.data_nascimento = data_nascimento
    usuario.telefone = telefone
    usuario.email = email
    usuario.senha = senha

    res.status(202).json()

}


module.exports = { editarConta }