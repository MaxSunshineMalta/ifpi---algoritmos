import { question } from "readline-sync";

function main(){
    const numero_x = Number(question('Número:'))
    let anterior = numero_x
    let atual = Number(question('Número:'))
    let soma = anterior + atual

    while(soma !== numero_x){
        anterior = atual
        atual = Number(question('Número:'))
        soma = atual + anterior

    }

}

 main()