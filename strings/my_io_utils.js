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


export function obter_texto(label = 'Digite um texto: '){
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

export function valor_equivalente_a_no_minimo_um_salario_minimo(label = 'Digite um número positivo: '){
    let numero = obter_numero_positivo(label)

    while (numero < 1320){
        mostrar_texto('Favor digite um valor de no mímino um salário mínimo')
        numero = obter_numero_positivo(label)
    }

    return numero
}


export function inverter_frase(frase){
    let frase_invertida = ''
    const tamanho = frase.length - 1

    for(let i = tamanho; i >= 0; i--){
        let caractere = frase[i]
        frase_invertida = frase_invertida + caractere
    }

    return frase_invertida
}


export function calcular_qtd_de_palavras(frase){
    let palavras_da_frase = frase.split(' ')
    let contador = 0
    
    for(let i = 0; i < palavras_da_frase.length; i++){
        contador++
    }

    return contador
}

//programação funcional