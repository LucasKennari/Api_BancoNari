const express = require("express");

// const { listarContas } = require('../controladores/listarContas/listarContas');
// const { editarConta } = require('../controladores/editarConta/editarConta');
// const { deletarConta } = require('../controladores/deletarConta/deletarConta');
// const { depositarConta } = require('../controladores/depositarConta/depositoConta');
// const { sacarDaConta } = require('../controladores/sacarConta/sacarDaConta');
// const { transferBancaria } = require('../controladores/transferenciaBancaria/transferBancaria');
// const { consultarSaldo } = require('../controladores/consultarSaldo/saldo');
// const { extratoBancario } = require('../controladores/extratoBancario/extratoBancario');

// const validarCampos = require("../intermediario/validarCampos");
const {
     loginUsuario,
} = require("../controladorUsuario/loginUsuario/loginUsuario");
const {
     perfilUsuario,
} = require("../controladorUsuario/perfilUsuario/perfilUsuario");
const cadastro = require("../controladorUsuario/cadastroUsuario/cadastro");
const rotas = express();

// === intermediario === //

// === rotas === //

// rotas.get("/contas", checarSenha, listarContas);

rotas.post("/cadastro", cadastro);
rotas.post("/login", loginUsuario);
rotas.post("/perfil", perfilUsuario);
// rotas.put('/conta/:numeroConta/usuario', checarCampos, checarCpfEmail, editarConta)
// rotas.delete('/contas/:numeroConta', deletarConta)
// rotas.post('/transacoes/depositar', depositarConta)
// rotas.post('/transacoes/sacar', sacarDaConta)
// rotas.post('/transacoes/transferir', transferBancaria)

// rotas.get('/contas/saldo', consultarSaldo)

// rotas.get('/contas/extrato', extratoBancario)

module.exports = rotas;
