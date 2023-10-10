const { contas } = require('../../bancoDeDados/bancodedados')

const checarCampos = async (req, res, next) => {

    const { nome, cpf, data_nascimento, telefone, email, senha } = req.body

    const checarCampos = (nome, cpf, data_nascimento, telefone, email, senha) => {


        if (!nome || !nome.trim()) {
            return res.status(400).json(`O campo NOME é obrigatório`)
        }
        if (!cpf || !cpf.trim()) {
            return res.status(400).json(`O campo CPF  é obrigatório`)
        }
        if (!data_nascimento || !data_nascimento.trim()) {
            return res.status(400).json(`O campo DATA_NASCIMENTO é obrigatório`)
        }
        if (!telefone || !telefone.trim()) {
            return res.status(400).json(`O campo TELEFONE é obrigatório`)
        }
        if (!email || !telefone.trim()) {
            return res.status(400).json(`O campo EMAIL é obrigatório`)
        }
        if (!senha || !senha.trim()) {
            return res.status(400).json(`O campo SENHA é obrigatório`)
        }

    }
    try {
        await checarCampos(nome, cpf, data_nascimento, telefone, email, senha)
        next()
    }
    catch (e) {
        res.status(404).json({ menssage: 'TODOS OS CAMPOS SÃO OBRIGAATÓRIOS' })
    }
}

const checarCpfEmail = async (req, res, next) => {
    const { cpf, email } = req.body
    const checarCpf = await contas.some(conta => cpf === conta.usuario.cpf)
    const checarEmail = await contas.some(conta => email === conta.usuario.email)

    if (checarCpf || checarEmail) {
        return res.status(409).json({ mensagem: "já possui uma conta com o mesmo EMAIL ou CPF" })
    }
    next()
}


const verificarBody = async (numero_conta_origem, numero_conta_destino, valor, senha) => {
    const podePassar = true
    if (!numero_conta_origem || !numero_conta_origem.trim()) {
        return false
    }
    if (!numero_conta_destino || !numero_conta_destino.trim()) {
        return false
    }
    if (!valor || !valor.trim()) {
        return false
    }
    if (!senha || !senha.trim()) {
        return false
    }
    //const checkCpf = contas.some(conta => cpf === conta.usuario.cpf)
    return podePassar
}
module.exports = { checarCampos, checarCpfEmail, verificarBody }
