import { question } from "readline-sync";

function main(){
    const num_a = Number(question('Número:'))
    const num_b = Number(question('Número:'))
    const mdc = calcular_mdc(num_a, num_b)
    console.log(`MDC = ${mdc}`)
}

function calcular_mdc(a,b){
    let maior = a > b ? a : b
    let mdc = maior
}

main()