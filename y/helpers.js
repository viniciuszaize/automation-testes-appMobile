function gerarCPF() {
    function rand(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function calcularDigito(cpfParcial) {
        let soma = 0;
        let peso = cpfParcial.length + 1;
        for (let i = 0; i < cpfParcial.length; i++) {
            soma += parseInt(cpfParcial[i]) * peso--;
        }
        let resto = soma % 11;
        return resto < 2 ? 0 : 11 - resto;
    }

    const cpfParcial = Array.from({ length: 9 }, () => rand(0, 9)).join('');
    const digito1 = calcularDigito(cpfParcial);
    const digito2 = calcularDigito(cpfParcial + digito1);

    return `${cpfParcial}${digito1}${digito2}`;
}


function gerarNumeroCelular() {

    const dddsValidos = [
        11, 12, 13, 14, 15, 16, 17, 18, 19,
        21, 22, 24, 
        27, 28, 
        31, 32, 33, 34, 35, 37, 38, 
        41, 42, 43, 44, 45, 46,
        47, 48, 49, 
        51, 53, 54, 55, 
        61, 
        62, 63, 
        64, 65, 66, 67, 68,
        69,
        71, 73, 74, 75, 77,
        81, 82, 83, 84, 
        85, 86, 87, 
        88,
        91, 92, 93, 94, 95, 96, 97, 98, 99
    ];

   
    const ddd = dddsValidos[Math.floor(Math.random() * dddsValidos.length)];

    const primeiroDigito = Math.floor(Math.random() * 9) + 1;
    const outrosDigitos = Math.floor(Math.random() * 10000000).toString().padStart(7, '0');

    return `${ddd}${9}${primeiroDigito}${outrosDigitos}`;
}

function gerarCelularInvalido() {
    const ddd = Math.floor(Math.random() * (99 - 11 + 1)) + 11; 
    const primeiroDigito = Math.floor(Math.random() * 8) + 1; 
    const restoNumero = Math.floor(Math.random() * 100000000).toString().padStart(8, '0'); 

    const numeroInvalido = `${ddd}${7}${primeiroDigito}${restoNumero}`;
    return numeroInvalido;
}

function gerarCpfInvalido() {
    function gerarDigitos() {
        return Math.floor(Math.random() * 9);
    }
    let cpfInvalido = '';

    for (let i = 0; i < 9; i++) {
        cpfInvalido += gerarDigitos().toString();
    }
    const digitoVerificador1 = (gerarDigitos() + 1) % 10;
    const digitoVerificador2 = (gerarDigitos() + 1) % 10;

    cpfInvalido += digitoVerificador1.toString() + digitoVerificador2.toString();

    return cpfInvalido;
}

function gerarSenha() {
    const caracteres = '0123456789';
    let senha = '';

    for (let i = 0; i < 6; i++) {
        const indice = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[indice];
    }

    return senha;
}

async function swipeAteFinalDaPagina() {
    const windowSize = await driver.getWindowRect();
    const altura = windowSize.height;
    const largura = windowSize.width;
    await driver.performActions([{
        type: 'pointer',
        id: 'finger1',
        parameters: { pointerType: 'touch' },
        actions: [
            { type: 'pointerMove', duration: 0, x: largura / 2, y: altura * 0.8 }, 
            { type: 'pointerDown', button: 0 },
            { type: 'pause', duration: 500 }, // Espera
            { type: 'pointerMove', duration: 500, x: largura / 2, y: altura * 0.2 },
            { type: 'pointerUp', button: 0 }
        ]
    }]);

    await driver.releaseActions()
}

async function swipeAteOTopoDaPagina() {
    const windowSize = await driver.getWindowRect()
    const altura = windowSize.height;
    const largura = windowSize.width;
    
    await driver.performActions([{
        type: 'pointer',
        id: 'finger1',
        parameters: { pointerType: 'touch' },
        actions: [
            { type: 'pointerMove', duration: 0, x: largura / 2, y: altura * 0.2 }, 
            { type: 'pointerDown', button: 0 },
            { type: 'pause', duration: 500 }, // Espera
            { type: 'pointerMove', duration: 500, x: largura / 2, y: altura * 0.8 },
            { type: 'pointerUp', button: 0 }
        ]
    }]);

    await driver.releaseActions()
}


module.exports = { gerarCPF, gerarNumeroCelular,gerarCelularInvalido,gerarCpfInvalido,gerarSenha,swipeAteFinalDaPagina,swipeAteOTopoDaPagina };
