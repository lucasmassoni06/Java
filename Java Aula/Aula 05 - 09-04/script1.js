console.log("Script externo rodando para o DOM");

const tituloElemento = document.getElementById('tituloDinamico');// seleciona o elemento <h2> pelo sei ID
tituloElemento.textContent = "Texto Alterado pelo JS";//Alterar o texto do <h2>
tituloElemento.style.color = 'green';//Alterando a cor do texto

const botaoElemento = document.getElementById('meuBotao');//selecioan o botao pelo ID
botaoElemento.addEventListener('click', function () {
    alert('Botâo foi clicado!');
})