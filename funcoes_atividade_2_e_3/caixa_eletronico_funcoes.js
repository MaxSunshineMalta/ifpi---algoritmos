import { question } from "readline-sync";

function main(){
    const quantia_solicitada = Number(question('Quantia:'))

    const restante_200 = calcular_restante_200(quantia_solicitada)
    const restante_100 = calcular_restante_100(restante_200)
    const restante_50 = calcular_restante_50(restante_100)
    const restante_20 = calcular_restante_20(restante_50)
    const restante_10 = calcular_restante_10(restante_20)
    const restante_5 = calcular_restante_5(restante_10)
    const restante_2 = calcular_restante_2(restante_5)
    const restante_1 = calcular_restante_1(restante_2)
    const duzentos = calcular_duzentos(quantia_solicitada)
    const cem = calcular_cem(restante_200)
    const cinquenta = calcular_cinquenta(restante_100)
    const vinte = calcular_vinte(restante_50)
    const dez = calcular_dez(restante_20)
    const cinco = calcular_cinco(restante_10)
    const dois = calcular_dois(restante_5)
    const um = calcular_um(restante_2)

    saida (duzentos, cem, cinquenta, vinte, dez, cinco, dois, um)
}

function calcular_restante_200(quantia_solicitada){
    const restante_200 = (quantia_solicitada % 200)
    return restante_200
}

function calcular_restante_100(restante_200){
    const restante_100 = (restante_200 % 100)
    return restante_100
}

function calcular_restante_50(restante_100){
    const restante_50 = (restante_100 % 50)
    return restante_50
}

function calcular_restante_20(restante_50){
    const restante_20 = (restante_50 % 20)
    return restante_20
}

function calcular_restante_10(restante_20){
    const restante_10 = (restante_20 % 10)
    return restante_10
}

function calcular_restante_5(restante_10){
    const restante_5 = (restante_10 % 5)
    return restante_5
}

function calcular_restante_2(restante_5){
    const restante_2 = (restante_5 % 2)
    return restante_2
}

function calcular_restante_1(restante_2){
    const restante_1 = (restante_2 % 1)
    return restante_1
}

function calcular_duzentos(quantia_solicitada){
    const duzentos = Math.floor(quantia_solicitada / 200)
    return duzentos
}

function calcular_cem(duzentos){
    const cem = Math.floor(duzentos / 100)
    return cem
}

function calcular_cinquenta(cem){
    const cinquenta = Math.floor(cem / 50)
    return cinquenta 
}

function calcular_vinte(cinquenta){
    const vinte = Math.floor(cinquenta / 20)
    return vinte
}

function calcular_dez(vinte){
    const dez = Math.floor(vinte / 10)
    return dez
}

function calcular_cinco(dez){
    const cinco = Math.floor(dez / 5)
    return cinco
}

function calcular_dois(cinco){
    const dois = Math.floor(cinco / 2)
    return dois
}

function calcular_um(dois){
    const um = Math.floor(dois / 1)
    return um
}

function saida(duzentos, cem, cinquenta, vinte, dez, cinco, dois, um){
    console.log('Notas 200:', duzentos)
    console.log('Notas 100:', cem)
    console.log('Notas 50:', cinquenta)
    console.log('Notas 20:', vinte)
    console.log('Notas  10:', dez)
    console.log('Notas 5:', cinco)
    console.log('Notas 2:', dois)
    console.log('Moedas 1:', um)
}

main()