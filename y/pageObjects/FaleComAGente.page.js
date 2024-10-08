const { $ } = require('@wdio/globals')
const {swipeAteFinalDaPagina,swipeAteOTopoDaPagina } = require('../helpers');

class FaleComAGentePage {
    
    get btnVoltar(){return $('//android.view.View[@content-desc="Voltar"]')}

    async clicarNoVoltarPagina() {
        await this.btnVoltar.click()
       }


       // métodos da página Fale com a Gente
        async NavegarTelaEVoltarParaPaginaInicial() {
            const primeiroElemento = await $('//hierarchy/android.widget.FrameLayout[1]');
            await primeiroElemento.waitForDisplayed({ timeout: 5000, timeoutMsg: 'Tela não carregou a tempo!' });
            await swipeAteFinalDaPagina()
            await swipeAteOTopoDaPagina()
            await this.clicarNoVoltarPagina()
            const elemento = $('~Conte com a gente para facilitar o seu dia a dia!');
            const isVisible = await elemento.isDisplayed();
            expect(isVisible).toBe(true);
        }
    }


    module.exports = new FaleComAGentePage();