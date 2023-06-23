import { question } from "readline-sync";

function main (){
    const valor = Number(question('Minutos:'))

    const horas = calcular_horas(valor)
    const minutos_restantes = calcular_minutos_restantes(valor)
    
    saida (horas, minutos_restantes)
    
}

function calcular_horas(valor){
    const horas = Math.floor(valor / 60 )
    return horas
}

function calcular_minutos_restantes(valor){
    const minutos_restantes = (valor % 60)
    return minutos_restantes
}

function saida(horas, minutos_restantes){
    console.log('Resultado:', horas,'hora(s) e', minutos_restantes, 'minutos')
}

main()
