const pool = require('../bancoDeDados/conexao')

async function verificarEmailExistente(email) {
    try {
        const row = await pool.query('Select email from usuarios where email = $1', [email])
        const emailRow = row

        return emailRow
    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno do servidor!" })
    }
}

const cadastroEfetuado = async (nome, email, senha) => {
    try {
        const { rows } = await pool.query('insert into usuarios (nome,email,senha) values ($1,$2, $3) returning * ', [nome, email, senha])

        const perfil = {
            id: rows[0].id,
            nome: rows[0].nome,
            email: rows[0].email
        }

        return perfil
    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno do servidor!" })
    }
}

module.exports = { verificarEmailExistente, cadastroEfetuado }