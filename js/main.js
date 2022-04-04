// Variáveis
// Atribuindo o elemento HTML à variável.
let calcular = document.getElementById('calcular')

function imc () {
    let nome = document.getElementById('nome').value
    let altura = document.getElementById('altura').value
    let peso = document.getElementById('peso').value
    let resultado = document.getElementById('resultado')
    
    if (nome !== '' && altura !== '' && peso !== '') {
        const valorIMC = (peso / (altura * altura)).toFixed(2) // Arrendondando valor para uma casa decimal.

        let classificacao = ""

        if (valorIMC < 18.5){
            classificacao = 'abaixo do peso.'
        } else if (valorIMC < 25) {
            classificacao = 'com peso ideal.'
        } else if (valorIMC < 30) {
            classificacao = 'levemente acima do peso.'
        } else if (valorIMC < 35) {
            classificacao = 'com obesidade Grau I.'
        } else if (valorIMC < 40) {
            classificacao = 'com obesidade Grau II'
        } else {
            classificacao = 'com obesidade Grau III.'
        }

        resultado.textContent = `${nome}, seu IMC é: ${valorIMC}. Você está ${classificacao}`
    }else {
        resultado.textContent = 'Preencha todos os campos.'
    }

}

calcular.addEventListener('click', imc)