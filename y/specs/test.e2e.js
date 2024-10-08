const { expect } = require('@wdio/globals')
const hooks = require ('../hooks')
const LoginPage = require('../pageObjects/login.page')
const CadastroPage = require ('../pageObjects/cadastro.page')
const ProdutosPage = require ('../pageObjects/ConhecaProdutos.page')
const HomePage = require('../pageObjects/Home.page')
const FaleComAGente = require ('../pageObjects/FaleComAGente.page')

before(async () => {
    hooks.resetTestCounter();
});
afterEach(hooks.afterEach);

describe('Testes exploratórios  do APP Meu Banco Carrefour', () => {
    
    it('Que visito a HomePage do Aplicativo', async () => {
        await HomePage.PaginaInicial()
    })

    it('Que Realizo o cadastro de Novo Usuario ', async () => {
        await HomePage.AcessarPaginaLogin()
        await LoginPage.CadastroSenha()
        await CadastroPage.CadastroNovoUsuario()
    })

    it('Que Realizo o cadastro de Novo Usuario com retorno Erro na tela', async () => {
        await HomePage.AcessarPaginaLogin()
        await LoginPage.CadastroSenha()
        await CadastroPage.CadastroNovoUsuarioMensagemErro()
    })

    it('Que Realizo o cadastro de Novo Usuario com CPF e Numero de Celular incorreto Erro', async () => {
        await HomePage.AcessarPaginaLogin()
        await LoginPage.CadastroSenha()
        await CadastroPage.CadastroNovoUsuarioCpfCelularIncorreto()
    })

    it('Que Realizo o login no aplicativo', async () => {
        await HomePage.AcessarPaginaLogin()
        await LoginPage.LoginUsuario()
    })

    it('Que Realizo o login no aplicativo com retorno Erro na tela', async () => {
        await HomePage.AcessarPaginaLogin()
        await LoginPage.LoginUsuarioComErroExibido()
    })

    it('Que o usuario está bloqueado e solicitou redefinição de senha', async () => {
        await HomePage.AcessarPaginaLogin()
        await LoginPage.LoginBloqueadoRedefiniçãoSenha()
        await CadastroPage.RedefinirSenhaDeUsuarioCadastrado()
    })
    it('Que o usuario deseja redefinir sua senha', async () => {
        await HomePage.AcessarPaginaLogin()
        await LoginPage.AcessarEsqueciSenha()
        await CadastroPage.EsqueciSenhaUsuarioCadastrado()
    })

    it('Que o usuario deseja conferir os produtos oferecidos pelo App', async () => {
        await HomePage.PaginaInicial()
        await HomePage.ConhecaNossoProdutosAcessar()
        await ProdutosPage.NavegarTelaEVoltarParaPaginaInicial()
    })

    it('Que o usuario deseja ver a pagina de fale com a gente do APP', async () => {
        await HomePage.PaginaInicial()
        await HomePage.FaleComAGenteAcessar()
        await FaleComAGente.NavegarTelaEVoltarParaPaginaInicial()
    })
})

