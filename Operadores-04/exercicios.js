// #1
const saldo = 500;
const deposito = 200;
const saque = 300;

const valorfinal = (saldo + deposito - saque);

console.log(valorfinal)

// #3
const adm = true;
const usuario = "Joao";

if (adm == true && usuario == "Joao"){
    console.log('vc tem permissao');
} else {
    console.log('voce nao tem permissao');
}

// #4

const nome = true;
const sala = false;

if (nome == true || sala == true){
    console.log('tudo certo');
} else {
    console.log('nao permitido');
}

//#5

const idademinima = 16;
const idademaxima = 70;
const idadepessoa = 11;

if (idademinima <= idadepessoa && idademaxima >= idadepessoa){
    console.log('voce pode compara');
} else {
    console.log('negado');
}