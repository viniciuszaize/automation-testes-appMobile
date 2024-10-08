const { $ } = require('@wdio/globals')
const { gerarCPF, gerarNumeroCelular,gerarCelularInvalido,gerarCpfInvalido } = require('../helpers');
const { getCpf, getSenha,getCelular } = require('../shredData');

class CadastroPage {
    get InputNumeroCelular() { return $('android=new UiSelector().className("android.widget.EditText").childSelector(new UiSelector().descriptionContains("Número de celular"))')}
    get InputCpf() { return $('android=new UiSelector().className("android.widget.EditText").childSelector(new UiSelector().descriptionContains("CPF"))')}
    async numeroDeCelular(numero) {
        const input = await this.InputNumeroCelular;
            await input.waitForExist(); 
            await input.click();

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
        for (const digito of numero) {
            await driver.pressKeyCode(keyCodes[digito]);
        }
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
    
    async clicarBotaoContinuar() {
        const continuarButton = await driver.$('//android.widget.TextView[@text="Continuar"]');
                                await continuarButton.click(); 
        }

        // métodos da página de Cadastro Usuario
        async CadastroNovoUsuario() {
            
            const numero = gerarNumeroCelular()
            const cpf = gerarCPF()
            await this.numeroDeCelular(numero)
            await this.numeroDeCpf(cpf)
            await this.clicarBotaoContinuar()
        }
        async RedefinirSenhaDeUsuarioCadastrado() {
            
            const numero = gerarNumeroCelular()
            const cpf = getCpf()
            await this.numeroDeCelular(numero)
            await this.numeroDeCpf(cpf)
            await this.clicarBotaoContinuar()
        }
        async EsqueciSenhaUsuarioCadastrado() {
            const numero = gerarNumeroCelular()
            await this.numeroDeCelular(numero)
            await this.clicarBotaoContinuar()
        }

        async CadastroNovoUsuarioMensagemErro() {
            await this.CadastroNovoUsuario()

        const mensagemErro = await $('//android.widget.TextView[@text="Ops, ocorreu um problema em nosso sistema"]');
        await browser.waitUntil(async () => {
        return await mensagemErro.isDisplayed();}, { timeout: 240 * 1000, timeoutMsg: 'A mensagem de erro não apareceu no tempo esperado' });
        const isVisible = await mensagemErro.isDisplayed();
        console.log('Mensagem de erro está visível:', isVisible);
}

    async CadastroNovoUsuarioCpfCelularIncorreto(){
        const numero = gerarCelularInvalido()
            const cpf = gerarCpfInvalido()

            await this.numeroDeCelular(numero)
            await this.numeroDeCpf(cpf)
        
        const erroCelular = await $('android=new UiSelector().description("Número de celular, Erro: Formato do celular incorreto")')
        const erroCpf = await $('android=new UiSelector().description("CPF, Erro: CPF Incorreto")')
        await browser.waitUntil(async () => {
            const isCelularDisplayed = await erroCelular.isDisplayed();
            const isCpfDisplayed = await erroCpf.isDisplayed();
            return isCelularDisplayed && isCpfDisplayed;}, { 
            timeout: 240 * 1000, 
            timeoutMsg: 'A mensagem de erro não apareceu no tempo esperado' 
        });
        const continuarButton = await driver.$('//android.widget.TextView[@text="Continuar"]');
            const isDisabled = !(await continuarButton.isEnabled());
        if (isDisabled) {
            console.log("O botão 'Continuar' está desabilitado.");
            } else {
            console.log("O botão 'Continuar' está habilitado.");
            }


    }

}

module.exports = new CadastroPage();
