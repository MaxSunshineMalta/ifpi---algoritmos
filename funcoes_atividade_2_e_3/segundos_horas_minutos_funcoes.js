import { question } from "readline-sync";

function main(){
    const valor = Number(question('Valor:'))
    const restante_para_saber_minutos = calcular_restante_para_saber_minutos(valor)
    const segundos = calcular_segundos(restante_para_saber_minutos)
    const minutos = calcular_minutos(restante_para_saber_minutos)
    const horas = calcular_horas(valor)
    
    saida(horas, minutos, segundos)
}

function calcular_restante_para_saber_minutos(valor){
    const restante_para_saber_minutos = valor % 3600
    return restante_para_saber_minutos
}

function calcular_segundos(restante_para_saber_minutos){
    const segundos = restante_para_saber_minutos % 60
    return segundos
}

function calcular_minutos(restante_para_saber_minutos){
    const minutos = Math.floor(restante_para_saber_minutos / 60)
    return minutos
}

function calcular_horas(valor){
    const horas = Math.floor(valor / 3600)
    return horas
}

function saida(horas, minutos, segundos){
    console.log('Tempo:', horas,'horas,', minutos,'minutos e', segundos,'segundos')
}

main()