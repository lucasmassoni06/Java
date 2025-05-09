const humor1 = document.getElementById('humor')
const meubotao = document.getElementById('botao')

meubotao.addEventListener('click', function(){
    sentimento = humor1.value
    if (sentimento == 'felicidade'){
        document.body.style.backgroundColor = "yellow";
    } else if (sentimento == 'tristeza'){
        document.body.style.backgroundColor = "blue";
    } else if (sentimento == 'raiva'){
        document.body.style.backgroundColor = "red";
    }
})