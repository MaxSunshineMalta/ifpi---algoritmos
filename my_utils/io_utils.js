import { question } from "readline-sync"
import {eh_letra_maiuscula, eh_letra_minuscula, transformar_em_maiuscula, transformar_em_minuscula} from './strings_utils.js'

export function mostrar_texto(conteudo){
    return console.log(conteudo)
}


export function mostrar_texto_inline(conteudo){
    process.stdout.write(conteudo)
}


export function obter_texto(label = 'digite um texto:'){
    const texto = question(label)

    return texto
}


export function obter_numero(label = 'Digite um número:'){
    let numero = obter_texto(label)

    while ((isNaN(Number(numero))) || numero == ''){
        mostrar_texto('Favor digite um valor válido!!')
        numero = obter_texto(label)
    }

    return Number(numero)
}


export function obter_numero_positivo(label = 'Digite um número positivo:'){
    let numero_positivo = obter_numero(label)

    while(numero_positivo <= 0){
        mostrar_texto('Favor digite um valor válido!!')
        numero_positivo = obter_numero(label)
    }

    return numero_positivo
}


export function obter_numero_negativo(label = 'Digite um número negativo:'){
    let numero_negativo = obter_numero(label)

    while(numero_negativo >= 0){
        mostrar_texto('Favor digite um valor válido!!')
        numero_negativo = obter_numero(label)
    }

    return numero_negativo
}


export function obter_numero_minimo(label = `Digite um número maior ou igual a ${minimo}:`,minimo){
    let numero_minimo = obter_numero(label)

    while(numero_minimo < minimo){
        mostrar_texto('Favor digite um valor válido!!')
        numero_minimo = obter_numero(label)
    }

    return numero_minimo
}


export function obter_numero_maximo(label = `Digite um número menor ou igual a ${maximo}:`, maximo){
    let numero_maximo = obter_numero(label)

    while(numero_maximo > maximo){
        mostrar_texto('Favor digite um valor válido!!')
        numero_maximo = obter_numero(label)
    }

    return numero_maximo
}


export function obter_numero_faixa(minimo, maximo){
    const label = `Digite um número entre ${minimo} e ${maximo}:`
    let numero_na_faixa = obter_numero(label)

    while(numero_na_faixa < minimo || numero_na_faixa > maximo){
        mostrar_texto('Favor digite um valor válido!!')
        numero_na_faixa = obter_numero(label)
    }

    return numero_na_faixa
}


export function mostrar_texto_em_caixa_alta(contexto){
    let texto_em_caixa_alta = ''
    for(let letra in contexto){
        const codigo_da_letra = contexto.charCodeAt(letra)
        if(eh_letra_minuscula(codigo_da_letra)){
            const maiuscula = transformar_em_maiuscula(codigo_da_letra)
            texto_em_caixa_alta = texto_em_caixa_alta + maiuscula
        }else{
            texto_em_caixa_alta = texto_em_caixa_alta + String.fromCharCode(codigo_da_letra)
        }
    }

    mostrar_texto(texto_em_caixa_alta)
}


export function mostrar_texto_em_caixa_baixa(contexto){
    let texto_em_caixa_baixa = ''

    for(let letra in contexto){
        const codigo_da_letra = contexto.charCodeAt(letra)
        
        if(eh_letra_maiuscula(codigo_da_letra)){
            const minuscula = transformar_em_minuscula(codigo_da_letra)
            texto_em_caixa_baixa = texto_em_caixa_baixa + minuscula
        }else{
            texto_em_caixa_baixa = texto_em_caixa_baixa + String.fromCharCode(codigo_da_letra)
        }
    }

    mostrar_texto(texto_em_caixa_baixa)
}


export function obter_texto_tam_maximo(label = 'Digite um texto:', maximo){
    let texto = obter_texto(label)

    while(texto.length > maximo){
        mostrar_texto('Favor digite um texto de tamanho válido!!')
        texto = obter_texto(label)
    }

    return texto
}


export function obter_texto_tam_minimo(label = 'Digite um texto:', minimo){
    let texto = obter_texto(label)

    while(texto.length < minimo){
        mostrar_texto('Favor digite um texto de tamanho válido!!')
        texto = obter_texto(label)
    }

    return texto
}


export function obter_texto_min_max(label = 'Digite um texto:', minimo, maximo){
    let texto = obter_texto(label)
    let tamanho = texto.length

    while(tamanho < minimo || tamanho > maximo){
        mostrar_texto('Favor digite um texto de tamanho válido!!')
        texto = obter_texto(label)
    }

    return texto
}


export function enter_limpar_tela(){
    obter_texto('Pressiona ENTER para retornar ao Menu')
    console.clear()
}


export function obter_numero_aleatorio_na_faixa(valor_maximo, valor_minimo){
    return Math.floor(Math.random() * (valor_maximo + 1 - valor_minimo) + valor_minimo)
}






