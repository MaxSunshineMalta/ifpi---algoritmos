import { question } from "readline-sync";

function main(){
    const base = Number(question('Base:'))
    const altura = Number(question('Altura:'))
    const area = calcular_area(base, altura)
    saida(area)
}

function calcular_area(base, altura){
    const area = (base * altura) / 2
    return area
}

function saida(area){
    console.log('Área:', area,'u.m')
}

main()