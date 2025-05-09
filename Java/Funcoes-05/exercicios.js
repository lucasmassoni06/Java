// #1
const exibeNome = (nome) => nome;
console.log(exibeNome("Joao"))

// #2
const idade = 15;
const exibeIdade = (idade) => idade 
    if (idade < 18) 
        console.log("Nao pode beber")
    else {
        console.log("Pode beber")
    }

// #4
function encontraMaiorValor(num1, num2, num3) {
    let maior = num1; // Assumindo inicialmente que num1 é o maior
   if (num2 > maior) {
        maior = num2; }
  if (num3 > maior) {
        maior = num3;}
   return maior;
  }
  console.log(encontraMaiorValor(12, 56, 32)); // 56