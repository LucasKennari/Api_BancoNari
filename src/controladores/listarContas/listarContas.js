const { contas, depositos } = require('../../bancoDeDados/bancodedados');
//checagem dinamica sem possui itens na conta ou não
const listarContas = async (req, res) => {

    const checarConta = contas.every(conta => conta === []);

    if (checarConta) {
        return res.status(204).send();
    }

    return res.status(200).json(contas);

}

module.exports = { listarContas }