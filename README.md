# Testes Exploratório de Aplicativo Android

Este projeto documenta a realização de **testes exploratórios** em um aplicativo Android, utilizando um emulador para garantir que todas as funcionalidades disponíveis fossem testadas. O foco foi desde a tela inicial até a tela "de mais informações", cobrindo cenários de erro e implementando helpers e hooks para aumentar a independência dos testes.

## Contato

- **Contato**: viniciuszaize1997@gmail.com

## Repositório no GitLab Pipeline
https://gitlab.com/automation-tests8370041/AppMobile.git

## Objetivos dos Testes

Os testes exploratórios foram realizados com os seguintes objetivos:

- **Cobertura Completa**: Testar todas as funções disponíveis no aplicativo, garantindo que cada fluxo de usuário fosse validado.
- **Cenários de Erro**: Verificar como o aplicativo se comporta em situações de erro, garantindo que mensagens de erro apropriadas sejam exibidas e que a experiência do usuário não seja comprometida.
- **Manutenção e Escalabilidade**: Implementar helpers e hooks que tornam o escopo de teste mais independente, diminuindo a manutenção e garantido a vida útil dos testes e contamos com uma pipeline configurada para garantir que a cada commit ou merge request o codigo esteja funcional.

## Estrutura do Projeto

- **test/**: Contém os testes automatizados que realizam as validações.
- **helpers/**: Contém funções auxiliares que ajudam na execução dos testes.
- **hooks/**: Contém hooks personalizados que permitem configurar e gerenciar o ambiente de testes.
- **CI/CD**: Contém um arquvivo configurado para rodar pipelines para garantir qualidade dos testes 

## Ferramentas Utilizadas

- **WebDriverIO**: Framework utilizado para automação de testes de interface do usuário.
- **Appium**: Ferramenta para automação de aplicativos móveis.
- **Emulador Android**: Utilizado para simular dispositivos Android e testar a aplicação.

## Cenários de Teste

Os testes exploratórios abrangeram os seguintes cenários:

1. **Tela Inicial**: Validação dos principais elementos e funcionalidades disponíveis na tela inicial do aplicativo.
2. **Tela "Login,Cadastro,Redefinição de Senha e informações do APP "**: Testes em todas as tela, garantindo que as interações com o usuário sejam intuitivas e funcionais.
3. **Funcionalidades do App**: Teste de cada funcionalidade disponível, assegurando que funcionem conforme o esperado.
4. **Cenários de Erro**: Testes realizados para induzir erros e verificar o tratamento e mensagens de erro exibidas.


## Execução dos Testes

Para executar os testes, utilize os seguintes comandos no terminal:

```bash
npm install  # Instala as dependências
npx wdio wdio.conf.js  # Executa os testes com WebDriverIO
