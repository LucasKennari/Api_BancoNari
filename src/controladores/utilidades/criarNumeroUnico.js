const { contas } = require("../../bancoDeDados/bancodedados")

const numero = () => {
    let numero = 1

    for (i = 0; i < contas.length; i++) {

        if (contas[i].numero === numero) {
            numero++
        }
    }
    return numero
}

module.exports = {
    numero
}

