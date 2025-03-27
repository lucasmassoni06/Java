const estudante = "Lucas";
const docente = 'Massoni';
const cumprimento = "nosso lema e 'estudar bastante!'";
const citacao = `Ju diz:"nosso lema e 'estudar bastante!'"`;

console.log(cumprimento);
console.log(citacao);

console.log(`a estudante chama ${estudante}`); // ${}para envolver variavel

//template string

const senha = 'SenhaSegura123' + estudante.toUpperCase(); // toUppercase = tudo em caps lock
console.log(senha);