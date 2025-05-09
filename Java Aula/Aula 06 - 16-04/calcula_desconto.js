const calculadora = require('readline').createInterface({

    input: process.stdin,//define a entrada como o fluxo de entrada padrão (teclado)
    output: process.stdout,//define a saida como o fluxo de saida padrão (terminal)
});

calculadora.question('Por favor digite um número: ', (numeroDigitado) => {
    const numero = parseInt(numeroDigitado)
    if (!isNaN(numero)) {
        if (numero >= 100) {
            console.log(`O valor final será de: ${numero * 0.9}!`);
        } else {
            console.log(`O valor final é de ${numero}!`);
        }
    } else {
        console.log(`O valor de entrada não é um inteiro..`);
    }
    calculadora.close();
})