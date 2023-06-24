import { question } from "readline-sync"

export function obter_numero(label='Digite um numero: '){
    let numero = obter_texto(label)

    while (isNaN(Number(numero)) || numero === ''){
        mostrar_texto('Valor inválido!')
        numero = question(label)
    }

    return Number(numero)
}


export function obter_numero_positivo(label = 'Digite um número positivo: '){
    let numero = obter_numero(label)

    while (numero <= 0){
        mostrar_texto('Favor digite um número positivo!')
        numero = obter_numero(label)
    }

    return numero
}


function obter_texto(label = 'Digite um texto: '){
    const texto = question(label)

    return texto
}

export function mostrar_texto(texto){
    console.log(texto)
}

export function enter_limpar_tela(){
    obter_texto('<Enter>....')
    console.clear()
}

export function mostrar_texto_inline(texto){
    process.stdout.write(texto)
}

//programação funcional