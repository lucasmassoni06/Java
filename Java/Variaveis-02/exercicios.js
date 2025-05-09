
#1
// Declarando as variáveis
let nome = "João";  // string
let idade = 25;     // número
let isEstudante = true; // booleano

// Exibindo o tipo de cada variável no console
console.log(typeof nome);       // tipo da variável "nome"
console.log(typeof idade);      // tipo da variável "idade"
console.log(typeof isEstudante); // tipo da variável "isEstudante"

#2
let nome = "lucas";
let nome2 = "massoni";
let nomes = nome + " " + nome2;
console.log(nomes)

#3
let nome = "lucas";
let idade = 18;
let dados = nome + " " + idade;
console.log(dados)

#4
//var fora e dentro do bloco
var nome = "lucas";
if (1>0){
    var nome ="joao";
    console.log(nome)
}
console.log(nome)

//let fora e dentro do bloco
let nome = "lucas";
if (1>0){
    let nome = "joao";
    console.log(nome)
}
console.log(nome)

