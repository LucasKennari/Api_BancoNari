const pool = require('../bancoDeDados/conexao')

async function verificarEmailExistente(email) {
    try {
        const row = await pool.query('Select email from usuarios where email = $1', [email])
        const emailRow = row
        return emailRow
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ mensagem: "Erro interno do servidor!" })
    }
}


async function verificarLoginExistente(login) {
    try {
        const row = await pool.query('Select login from usuarios where login = $1', [login])


        return row
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ mensagem: "Erro interno do servidor!" })
    }
}
const cadastroEfetuado = async (login, nome, email, senha) => {
    try {
        const conta_ativa = true
        const { rows } = await pool.query(
            'insert into usuarios (login, nome,email,senha, conta_ativa) values ($1,$2, $3, $4, $5) returning * ',
            [login, nome, email, senha, conta_ativa])

        const perfil = {
            id: rows[0].id,
            login: rows[0].login,
            nome: rows[0].nome,
            email: rows[0].email
        }

        return perfil
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ mensagem: "Erro interno do servidor!" })
    }
}

module.exports = {
    verificarEmailExistente,
    cadastroEfetuado,
    verificarLoginExistente
}