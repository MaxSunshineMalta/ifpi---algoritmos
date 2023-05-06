import { question } from "readline-sync";

function main(){
    const num1 = obter_numero_inteiro()
    const num2 = obter_numero_inteiro()
    const num3 = obter_numero_inteiro()
    const num4 = obter_numero_inteiro()

    const produto_do_primeiro_pelo_segundo = num1 * num2
    const produto_do_terceiro_pelo_quarto = num3 * num4
    const diferenca = produto_do_primeiro_pelo_segundo - produto_do_terceiro_pelo_quarto

    mostrar_texto(`DIFERENCA = ${diferenca}`)
}

function mostrar_texto(texto){
    return console.log(texto)
}


function obter_texto(label = 'Digite um texto: '){
    const texto = question(label)

    return texto
}


function obter_numero(label='Digite um numero: '){
    let numero = obter_texto(label)

    while (isNaN(Number(numero)) || numero === ''){
        mostrar_texto('Valor inválido!')
        numero = question(label)
    }

    return Number(numero)
}

function obter_numero_inteiro(label = 'Digite um número inteiro:'){
    let numero = obter_numero(label)

    while (((numero * 10) % 10) !== 0){
        mostrar_texto('Favor digite um número inteiro!')
        numero = obter_numero(label)
    }

    return numero
}

main()