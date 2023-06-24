import { question } from "readline-sync";

function main(){
    const numero = Number(question('Qual número você quer os múltiplos?'))
    const quantidade_multiplos = Number(question('Quantos múltiplos?'))
    let contador_multiplos = 0
    let multiplo = numero

    while (contador_multiplos < quantidade_multiplos){
        if(eh_multiplo(multiplo, numero)){
            console.log(`> ${multiplo}`)
            contador_multiplos = contador_multiplos + 1
        }
        multiplo = multiplo + numero
    }
}

function eh_multiplo(candidato, numero){
    return candidato % numero === 0
}

main()