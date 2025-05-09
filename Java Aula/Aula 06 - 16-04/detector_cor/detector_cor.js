const botao = document.getElementById('meubotao')
const cor1 = document.getElementById('cor')
botao.addEventListener('click', function () {
    let corfundo = cor1.value
    document.body.style.backgroundColor = corfundo;
})