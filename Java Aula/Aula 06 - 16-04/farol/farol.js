const Verde = document.getElementById('verde')
const Amarelo = document.getElementById('amarelo')
const Vermelho = document.getElementById('vermelho')
const Texto = document.getElementById('texto')

Verde.addEventListener('click', function(){
    document.body.style.backgroundColor = 'green';
    Texto.textContent = "Prossiga!"
})
Amarelo.addEventListener('click', function(){
    document.body.style.backgroundColor = 'yellow';
    Texto.textContent = "Atencao!"
})
Vermelho.addEventListener('click', function(){
    document.body.style.backgroundColor = 'red';
    Texto.textContent = "Pare!"
})