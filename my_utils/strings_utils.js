import { mostrar_texto, mostrar_texto_em_caixa_alta, obter_texto } from './io_utils.js'

export function mostrar_caracteres_por_linha(titulo, texto){
    mostrar_texto(titulo)

    for(let caractere of texto){
        mostrar_texto(caractere)
    }
}


export function mostrar_palavras_por_linha(titulo, texto){
    mostrar_texto(titulo)
    const palavras = texto.split(' ')

    for(let palavra of palavras){
        mostrar_texto(palavra)
    }
}


export function quebrar(texto, caractere_de_quebra){
    let texto_separado = ''
    let array_com_texto_quebrado = []

    for(let caractere of texto){
        if(caractere === caractere_de_quebra){
            array_com_texto_quebrado.push(texto_separado)
            texto_separado = ''
        }
        if(caractere !== caractere_de_quebra){
            texto_separado = texto_separado + caractere
        }
    }

    array_com_texto_quebrado.push(texto_separado)

    return array_com_texto_quebrado
}


export function juntar(colecao, caractere_de_juncao){
    let texto_junto = ''
    let index = 0
    
    for(let item of colecao){
        if(index === colecao.length - 1){
            texto_junto = texto_junto + item 
            break
        }
        texto_junto = texto_junto + item + caractere_de_juncao
        index++
    }

    return texto_junto
}


export function contar_caractere(texto, caractere_a_ser_contado, caso_ignorado){
    let contador = 0

    for(let caractere of texto){
        if(caractere === caractere_a_ser_contado && !(caso_ignorado)){
           contador++
        }
    }

    return contador
}


export function contem_caractere(texto, caractere_a_ser_verificado, caso_ignorado){
    for(let caractere of texto){
        if(caractere === caractere_a_ser_verificado && !(caso_ignorado)){
            return true
        }else{
            return false
        }
    }
}


export function transformar_em_caixa_alta(contexto){
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

    return texto_em_caixa_alta
}


export function transformar_em_caixa_baixa(contexto){
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

    return texto_em_caixa_baixa
}


export function eh_letra_minuscula(codigo){
    return codigo >= 97 && codigo <= 122
}


export function eh_letra_maiuscula(codigo){
    return codigo >= 65 && codigo <= 90
}


export function transformar_em_maiuscula(codigo){
    return String.fromCharCode(codigo - 32)
}


export function transformar_em_minuscula(codigo){
    return String.fromCharCode(codigo + 32)
}


export function eh_letra(codigo){
    return codigo >= 65 && codigo <= 90 || codigo >= 97 && codigo <= 122
}


export function substituir_caractere(texto, caractere_a_ser_substituido, substituto){
    let texto_com_caractere_substituido = ''

    for(let caractere of texto){
        if(caractere === caractere_a_ser_substituido){
            texto_com_caractere_substituido = texto_com_caractere_substituido + substituto
        }else{
            texto_com_caractere_substituido = texto_com_caractere_substituido + caractere
        }
    }

    return texto_com_caractere_substituido
}


export function remover_caractere(texto, caractere_a_ser_removido){
    let texto_com_caractere_removido = ''

    for(let caractere of texto){
        if(caractere === caractere_a_ser_removido){
            texto_com_caractere_removido = texto_com_caractere_removido + ''
        }else{
            texto_com_caractere_removido = texto_com_caractere_removido + caractere
        }
    }

    return texto_com_caractere_removido
}


export function tamanho_do_texto(texto){
    contador = 0
    for(let caractere of texto){
        contador++
    }

    return contador
}
