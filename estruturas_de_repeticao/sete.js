import { question } from "readline-sync";

function main(){
    const inicio = Number(question('Início:'))
    const fim = Number(question('Fim:'))

    let atual = inicio

    while (atual <= fim){
        if(atual % 2 !== 0 && atual % 7 === 0){
            console.log(atual)
        }
        atual = atual + 1

    }
}

main()