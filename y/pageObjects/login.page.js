const { $ } = require('@wdio/globals')
const {wait} = require('webdriverio')
const { gerarCPF,gerarSenha } = require('../helpers');
const { setCpf, setSenha, setCelular } = require('../shredData');


class LoginPage {

    get btnContinuar() { return $('android.widget.Button') }
    get btnCriarSenha() {return $('//android.widget.TextView[@text="Crie sua senha"]/following-sibling::android.widget.Button')} 
    get InputSenha (){ return $('//android.view.View[@content-desc="Senha de acesso. "]')}
    get InputCpf() { return $('android=new UiSelector().className("android.widget.EditText").childSelector(new UiSelector().descriptionContains("CPF"))')}
    get btnEntrar (){return $('//android.widget.TextView[@text="Entrar"]/following-sibling::android.widget.Button')}
    get btnRedefinirSenha (){return $('//android.widget.TextView[@text="Redefinir senha"]/following-sibling::android.widget.Button')}
    get btnEsqueciSenha (){return $('//android.widget.TextView[@text="Esqueci a senha"]/following-sibling::android.widget.Button')}
    get btnVoltar(){return $('~Voltar')}

    async clicarBotaoContinuar() {
         await this.btnContinuar.click()
        }
    async btcriarSenha() {
        await this.btnCriarSenha.click()
         }
    async btnEntrarNoApp(){
            await this.btnEntrar.click()
         }
    async btnRedifinirSenhaUsuario(){
            await this.btnRedefinirSenha.click()
         }
    async btnEsqueciMinhaSenha(){
            await this.btnEsqueciSenha.click()
         }
    async btnVoltarPagina(){
            await this.btnVoltar.click()
         }   
     

    async numeroDeCpf(cpf) {
        await this.InputCpf.click()
        const keyCodes = {
                '0': 7,
                '1': 8,
                '2': 9,
                '3': 10,
                '4': 11,
                '5': 12,
                '6': 13,
                '7': 14,
                '8': 15,
                '9': 16
        }
        for (const digito of cpf) {
                await driver.pressKeyCode(keyCodes[digito]);
        }
           }
        

    async SenhaDigitada(senha) {
        await this.InputSenha.click()
        const keyCodes = {
                '0': 7,
                '1': 8,
                '2': 9,
                '3': 10,
                '4': 11,
                '5': 12,
                '6': 13,
                '7': 14,
                '8': 15,
                '9': 16
           }
           for (const digito of senha) {
                   await driver.pressKeyCode(keyCodes[digito]);
           }
            }

    // métodos da página de login
    async CadastroSenha() {
        await this.btcriarSenha();
        const elemento = $('//android.widget.TextView[contains(@text, "Para continuar, precisamos que você insira")]');
        const isVisible = await elemento.isDisplayed();
        expect(isVisible).toBe(true);
        }

    async AcessarEsqueciSenha(){
        const cpf = gerarCPF()
        setCpf(cpf);

        await this.numeroDeCpf(cpf)
        await driver.back();
        await this.btnEsqueciMinhaSenha()
        }

    async LoginUsuario(){
        const senha = gerarSenha()
        const cpf = gerarCPF()

        setCpf(cpf);
        setSenha(senha);

        await this.numeroDeCpf(cpf)
        await driver.back();
        await this.SenhaDigitada(senha)
        await this.btnEntrarNoApp()
        }

    async LoginUsuarioComErroExibido(){
        await this.LoginUsuario()

        const mensagemErro = await $('//android.widget.TextView[contains(@text, "Seu acesso foi bloqueado")]');
        await browser.waitUntil(async () => {
        return await mensagemErro.isDisplayed();}, { timeout: 240 * 1000, timeoutMsg: 'A mensagem de erro não apareceu no tempo esperado' });
        const isVisible = await mensagemErro.isDisplayed();
        console.log('Mensagem de erro está visível:', isVisible);
        }

    async LoginBloqueadoRedefiniçãoSenha(){
        await this.LoginUsuarioComErroExibido()
        await this.btnRedifinirSenhaUsuario()
        } 
}

module.exports = new LoginPage();
