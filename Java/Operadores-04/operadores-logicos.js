const notaFInal = 7;
const faltas =3;
const advertencias = 0;

if ( notaFInal < 7 || faltas > 4){ // || = or
    console.log('Reprovado')
} else {
    console.log('Nao foi reprovado!')
}

const notaFInal1 = 7;
const faltas2 =3;

if ( notaFInal1 < 7 && faltas2 > 4){ // && = and
    console.log('Reprovado')
} else {
    console.log('Nao foi reprovado!')
}

if (faltas >= 2 && !advertencias){ // ! vai negar o valor de true or false
    console.log('Recebeu bonus');
} else {
    console.log('Nao recebeu bonus!');
}
