//Vamos importar o modulo "readline" para interagir com a entrada e saida do terminal

const readLine = require('readline').createInterface({

    input: process.stdin,//define a entrada como o fluxo de entrada padrão (teclado)
    output: process.stdout,//define a saida como o fluxo de saida padrão (terminal)
});

//exibe uma pergunta no terminal e espera pela resposta do usuário

readLine.question('Por favor digite um número: ', (numeroDigitado) => {
    //Converte a entrada do usuário (que um string) para um número inteiro
    const numero = parseInt(numeroDigitado)

    //Verifica se a conversão para o número inteiro foi bem sucedida
    if (!isNaN(numero)) {
        // se o número for divisivel por 2 (o resto da divisão é zero) ele é par
        if (numero % 2 == 0) {
            console.log(`O número ${numero} é par!`);
        } else {
            console.log(`O número ${numero} é impar!`);
        }
    } else {
        console.log(`O valor de entrada não é um inteiro..`);
    }
    //fechar a interface do readline, encerrando a interação com o usuário
    readLine.close();
});