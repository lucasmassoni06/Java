const frutas = ['maca', 'melancia', 'banana'];

const numeros = [10,20,30,40];

const misturados = [1, 'dois', 3, 'quatro', true, null, undefined, {chave:'valor'}];

const cores = new Array('vermelho', 'preto', 'branco');

const vazio = [];

const linguagens = ['javascript', 'java', 'pyhon', 'c#']

//Acessando o primeiro elemento do Array

const primeiraLinguagem = linguagens[0];
console.log(`A primeira linguagem é ${primeiraLinguagem}`);

const ultimaLinguagem = linguagens[linguagens.length-1];
console.log(`A primeira linguagem é ${ultimaLinguagem}`);

let coresMutaveis = ['branco', 'azul', 'rosa'];
coresMutaveis[1]='amarelo';
console.log(`Array após a alteração : ${coresMutaveis}`);
coresMutaveis[coresMutaveis.length]='roxo';

let planetas = ['Terra', 'Marte']
//push() --> adiciona um ou mais elementos ao final do Array e retorna o novo componente
const novoComprimentoPush = planetas.push('Saturno', 'Urano');

//pop() --> remove o ultimo elemento do array
const ultimoPlaneta = planetas.pop();

//indexOf --> retorna o primeiro indice em que um elemento pode ser encontrado no array
const indicePlaneta = planetas.indexOf('Terra');

//join() --> cria e retorna uma nova string concatenando todos os elementos do array
const stringPlanetas = planetas.join('-');

const coresInteracao = ['laranja', 'ciano', 'magenta'];

for(let i=0;i<coresInteracao.length;i++){
    console.log(`Cor no índice ${i} : ${coresInteracao[i]}`);
}

//Laço ´for ... of' (mais moderno  e legivel para iterar sobre valores)
for(const cor of coresInteracao){
    console.log(`Cor: ${cor}`);
}

coresInteracao.forEach(function(cor,indice){
    console.log(`Cor: ${cor} no indice: ${indice}`);
})

//Este trecho demonstra como criar um array em JavaScript recebendo
//dados do usuário através do terminal (Node.js)

const readline = require('readline').createInterface({
    input:process.stdin,
    output:process.stdout,
})

//criar um array vazio para armazenar os itens da lista de compras do usuário
const listaCompras = [];

//criar uma funcao para adicionar um item na lista de compras
function adicionarItem(){
    readline.question(`Digite um item para adicionar a lista de compras (ou fim para sair ): `, (item)=>{
        const itemFormatado = item.trim();//remove os espaços em branco extras
        //Verifica se o usuário digitou "fim" (ignorando a caixa alta/baixa)
        if(itemFormatado.toLowerCase()== 'fim'){
            //se o usuário digitou "fim", encerra a interação com o terminal
            console.log('\nSua lista de compra completa: ')
            //itera sobre cada item no array 'listaCompras'
            listaCompras.forEach((produto,indice) =>{
                console.log(`${indice+1}. ${produto}`);
            });
            readline.close();
        }else if (itemFormatado !== ''){
            listaCompras.push(itemFormatado);
            console.log(`"${itemFormatado}" foi adicionado a sua lista!`)
            adicionarItem();
        }else{
            //se o usuário digitou apenas espaços ou nada
            console.log('Por favor , digite um item válido.');
            adicionarItem();
        }
    });
}
//Inicia o processo de adicionar item a lista de compras chamando a funcao
console.log(`Bem vindo a sua lista de compra`);
adicionarItem();