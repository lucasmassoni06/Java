
let nome = 'Joao';
const idade = 30;
let mensagem = "Olá " + nome + " você tem: " + idade + " ano de vida! ";
console.log(mensagem);

let texto = "Isso é uma string";
let texto1 = "Isso também é uma string";
let numeroInteiro = 10;
let numeroDecimal = 3.14;
let isAtivo = true;
let nulo = null;
let indefinido;

console.log(typeof texto);
console.log(typeof texto1);
console.log(typeof numeroInteiro);
console.log(typeof numeroDecimal);
console.log(typeof isAtivo);
console.log(typeof nulo);
console.log(typeof indefinido);

let a = 5;
let b = 6;

console.log("Soma: ", a + b);
console.log("Subtração: ", a - b);
console.log("Multiplicação: ", a * b);
console.log("Divisão: ", a / b);

a++;
b--;
console.log("Incrementando A: ", a);
console.log("Decrementando B: ", b);


let idade1 = 17;

if (idade1 > 18) {
    console.log("Você é maior de idade!!");
} else {
    console.log("Você é menor de idade!!");
}

let temperatura = 25;

if (temperatura > 30) {
    console.log("Está muito quente!!")
}

let nota = 7;

if (nota >= 7) {
    console.log("Você foi Aprovado!!");
} else {
    console.log("Você foi Reprovado!!");
}

let estaChovendo = false;

if (estaChovendo) {
    console.log("Leve o guarda-chuva!")
} else {
    console.log("Não precisa de guarda-chuva!")
}

