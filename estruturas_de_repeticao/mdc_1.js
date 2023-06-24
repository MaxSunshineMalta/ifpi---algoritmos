import { question } from "readline-sync";

function main(){
    const num1 = Number(question('Número 1:'))
    const num2 = Number(question('Número 2:'))
    const mdc = calcular_mdc(num1, num2)
    console.log(`MDC = ${mdc}`)
}

function calcular_mdc(n1, n2){
    let candidato = n1
    
    while (candidato >= 1){
        if(eh_divisor(candidato, n1) && eh_divisor(candidato, n2)){
            return candidato
        }
        candidato -=1
    }
}

function eh_divisor(candidato_a_divisor, numero){
    return numero % candidato_a_divisor === 0
}

main()