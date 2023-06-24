import { question } from "readline-sync";

function main(){
    const numero_1 = Number(question('Número 1:'))
    const numero_2 = Number(question('Número 2:'))
    const maior = numero_1 > numero_2 ? numero_1 : numero_2
    const menor = numero_1 < numero_2 ? numero_1 : numero_2
    const inicio = menor
    let atual = inicio
    const fim = maior

    while (atual <= fim){

        eh_divisor(atual)
        atual++
        
    }
}


function eh_divisor(atual){
    let candidato = 1
    let quantidade = atual

    console.log(`Os divisores do número ${quantidade}, excluindo ele mesmo, são:`)

    while (candidato < atual){
        if( atual % candidato === 0){
            console.log(`${candidato}`)
        }
    candidato++
    }
}


main()