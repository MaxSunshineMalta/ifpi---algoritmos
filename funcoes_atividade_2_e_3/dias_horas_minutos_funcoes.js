import { question } from "readline-sync";

function main(){
    const valor = Number(question('Valor:'))
    const restante_hora = calcular_restante_hora(valor)
    const dias = calcular_dias(valor)
    const horas = calcular_horas(restante_hora)
    const minutos = calcular_minutos(restante_hora)
    saida(dias, horas, minutos)
}

function calcular_restante_hora(valor){
    const restante_hora = (valor % 1440)
    return restante_hora
}

function calcular_dias(valor){
    const dias = Math.floor(valor / 1440)
    return dias
}

function calcular_horas(restante_hora){
    const horas = Math.floor(restante_hora / 60)
    return horas
}

function calcular_minutos(restante_hora){
    const minutos = ( restante_hora % 60)
    return minutos
}

function saida(dias, horas, minutos){
    console.log('Tempo:',dias,'dia(s),', horas, 'hora(s) e', minutos,'minuto(s)')
}

main()