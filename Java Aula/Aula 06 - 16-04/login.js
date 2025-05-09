const usuario = `LucasMassoni`;
const senhacorreta = `Lucas123`;
const readLine = require('readline').createInterface({

    input: process.stdin,
    output: process.stdout,
});
readLine.question("Digite seu login:  ", (login) =>
readLine.question("Digite sua senha:  ", (senha) =>{
if (login == usuario && senhacorreta == senha){
    console.log("Acesso permitido!!");
} else {
    console.log("Acesso Negado!!");
}
}))