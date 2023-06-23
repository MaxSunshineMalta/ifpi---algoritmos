import { question } from "readline-sync";

function main(){
    const raio = Number(question('Raio:'))
    const comprimento = calcular_comprimento(raio)
    saida(comprimento)
}

function calcular_comprimento(raio){
    const comprimento = 2 * 3.14 * raio
    return comprimento
}

function saida(comprimento){
    console.log('Comprimento:', comprimento.toFixed(2), "u.m")
}

main()