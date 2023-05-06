import { question } from "readline-sync";

function main(){
    const num1 = obter_numero_inteiro()
    const num2 = obter_numero_inteiro()

    const soma = num1 + num2

    mostrar_texto(`SOMA = ${soma}`)
}


function mostrar_texto(valor){
    return console.log(valor)
}

function obter_numero_inteiro(){
    let numero = Number(question('Digite um número:'))

    while (((numero * 10) % 10) !== 0){
        mostrar_texto('Favor digite um número inteiro!')
        numero = Number(question('Digite um número:'))
    }

    return numero
}

main()