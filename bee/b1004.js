import { question } from "readline-sync";

function main(){
    const num1 = obter_numero_inteiro()
    const num2 = obter_numero_inteiro()

    const prod = num1 * num2

    mostrar_texto(`PROD = ${prod}`)
}


function mostrar_texto(valor){
    return console.log(valor)
}

function obter_numero_inteiro(){
    let numero = Number(question('Digite um número:'))
    let candidato = (numero * 10) % 10
    
    while (candidato !== 0){
        mostrar_texto('Favor digite um número inteiro!')
        numero = Number(question('Digite um número:'))
        candidato = (numero * 10) % 10
    }

    return numero
}

main()