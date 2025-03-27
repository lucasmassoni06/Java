const notaPrimeiroBi = 8;
const notaSegundoBi = 6.3;
const notaTerceiroBi = 7;
const notaQuartoBI = 9.3; 

let media = (notaPrimeiroBi + notaSegundoBi + notaTerceiroBi + notaQuartoBI) / 4;

if (media >= 7) {
    media += media * 0.1;
}

console.log(`a media e de ${media.toFixed(2)}`);

const salarioMensal = 3500; 
const despesasFixas = 1200; 
const despesasVariaveis = 500; 
const economiasMensais = 800;
const bonusAnual = 3000;
//nao e capaz de seguir as prioridades matematicas 
const resultado = (salarioMensal - despesasFixas - despesasVariaveis) * 12 + (economiasMensais * 12) + bonusAnual;
console.log(resultado);