//Dom
const primeiranota = document.querySelector('#primeiranota')
const segundanota = document.querySelector('#segundanota')
const terceiranota = document.querySelector('#terceiranota')
const botao = document.querySelector('#botao')
const resultado1 = document.querySelector('#resultado1')
const resultado2 = document.querySelector('#resultado2')

//Evento
botao.addEventListener('click', media)

//Ação
function media(){

    p = Number(primeiranota.value)
    s = Number(segundanota.value)
    t = Number(terceiranota.value)
    calculo = p + s + t / 2

    resultado1.textContent = `A sua média é ${calculo.toFixed(2)}`

    if(calculo <15){
        resultado2.textContent = `Reprovado.`
    }else if(calculo >15 && calculo <20){
        resultado2.textContent = `Recuperação.`
    }else {
        resultado2.textContent = `Aprovado!`
    }
}