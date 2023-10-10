

async function buscarConta(contas, numeroConta) {
    return BuscarConta = contas.find(conta => conta.numero === Number(numeroConta))
}

module.exports = {
    buscarConta
}