const { $ } = require('@wdio/globals')

class HomePage {
    
    get btnContinuar() { return $('android.widget.Button') }
    get btnAllowPermission() {return $('id:com.android.packageinstaller:id/permission_allow_button')}
    get btnEntrarNoAplicativo() {return $('//android.widget.TextView[@text="Entrar no aplicativo"]/following-sibling::android.widget.Button')}
    get btnConhecaProdutos() {return $('//android.widget.TextView[@text="Quero conhecer os produtos"]/following-sibling::android.widget.Button')}
    get btnFaleComAGente() {return $('//android.widget.TextView[@text="Fale com a gente"]/following-sibling::android.widget.Button')}  

    async clicarBotaoContinuar() {
        await this.btnContinuar.click()
       }
    async permitirPermissaoDados() {
       await this.btnAllowPermission.click()
       }
    async entrarNoAplicativo() {
       await this.btnEntrarNoAplicativo.click()
        }
    async bntConhecerNossosProdutos(){
        await this.btnConhecaProdutos.click()
         }
    async btnFaleComAgente(){
        await this.btnFaleComAGente.click()
         }

       // métodos da página da Pagina Inicial
        async PaginaInicial() {
            await this.clicarBotaoContinuar();
            await this.permitirPermissaoDados();
            await this.clicarBotaoContinuar(); 
            const elemento = $('~Conte com a gente para facilitar o seu dia a dia!');
            const isVisible = await elemento.isDisplayed();
            expect(isVisible).toBe(true);
            }
            
            async AcessarPaginaLogin() {
                await this.clicarBotaoContinuar();
                await this.permitirPermissaoDados();
                await this.clicarBotaoContinuar(); 
                const elemento = $('~Conte com a gente para facilitar o seu dia a dia!');
                const isVisible = await elemento.isDisplayed();
                expect(isVisible).toBe(true);
                await this.entrarNoAplicativo()
                }
            async ConhecaNossoProdutosAcessar(){
                await this.bntConhecerNossosProdutos()
            }
            async FaleComAGenteAcessar(){
                await this.btnFaleComAgente()
                } 
    }

    module.exports = new HomePage();