let cpfGerado = '';
let senhaGerada = '';
let celularGerado = '';

function setCpf(cpf) {
    cpfGerado = cpf;
}

function setSenha(senha) {
    senhaGerada = senha;
}

function setCelular(celular) {
    celularGerado = celular;
}

function getCpf() {
    return cpfGerado;
}

function getSenha() {
    return senhaGerada;
}

function getCelular() {
    return celularGerado;
}

module.exports = { setCpf, setSenha, setCelular, getCpf, getSenha, getCelular };