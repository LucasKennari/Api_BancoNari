const express = require('express')

const cadastro = require('../controladorUsuario/cadastro');


// const { listarContas } = require('../controladores/listarContas/listarContas');
// const { editarConta } = require('../controladores/editarConta/editarConta');
// const { deletarConta } = require('../controladores/deletarConta/deletarConta');
// const { depositarConta } = require('../controladores/depositarConta/depositoConta');
// const { sacarDaConta } = require('../controladores/sacarConta/sacarDaConta');
// const { transferBancaria } = require('../controladores/transferenciaBancaria/transferBancaria');
// const { consultarSaldo } = require('../controladores/consultarSaldo/saldo');
// const { extratoBancario } = require('../controladores/extratoBancario/extratoBancario');

const validarCampos = require('../intermediario/validarCampos');
const rotas = express()


// === intermediario === //



// === rotas === //

//rotas.get('/contas', checarSenha, listarContas);

rotas.post('/cadastro', validarCampos, cadastro)

// rotas.put('/conta/:numeroConta/usuario', checarCampos, checarCpfEmail, editarConta)
// rotas.delete('/contas/:numeroConta', deletarConta)
// rotas.post('/transacoes/depositar', depositarConta)
// rotas.post('/transacoes/sacar', sacarDaConta)
// rotas.post('/transacoes/transferir', transferBancaria)

// rotas.get('/contas/saldo', consultarSaldo)

// rotas.get('/contas/extrato', extratoBancario)

module.exports = { rotas }