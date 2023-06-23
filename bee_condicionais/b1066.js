import { question } from "readline-sync";

function main(){
    const num1 = obter_numero_inteiro()
    const num2 = obter_numero_inteiro()
    const num3 = obter_numero_inteiro()
    const num4 = obter_numero_inteiro()
    const num5 = obter_numero_inteiro()

    const qtd_de_numeros_pares = calcular_qtd_de_numeros_pares(num1, num2, num3, num4, num5)
    const qtd_de_numeros_impares = 5 - qtd_de_numeros_pares
    const qtd_de_numeros_positivos = calcular_qtd_de_numeros_positivos(num1, num2, num3, num4, num5)
    const qtd_de_numeros_negativos = calcular_qtd_de_numeros_negativos(num1, num2, num3, num4, num5)

    mostrar_texto(`${qtd_de_numeros_pares} valor(es) par(es)`)
    mostrar_texto(`${qtd_de_numeros_impares} valor(es) impar(es)`)
    mostrar_texto(`${qtd_de_numeros_positivos} valor(es) positivo(s)`)
    mostrar_texto(`${qtd_de_numeros_negativos} valor(es) negativo(s)`)
}


function mostrar_texto(texto){
    return console.log(texto)
}


function obter_numero_inteiro(label = 'Digite um número:'){
    let numero = Number(question(label))
    let candidato = (numero * 10) % 10
        
    while (candidato !== 0){
        mostrar_texto('Favor digite um número inteiro!')
        numero = Number(question(label))
        candidato = (numero * 10) % 10
    }
    
    return numero
}


function calcular_qtd_de_numeros_pares(num1, num2, num3, num4, num5){
    let qtd_de_numeros_pares = 0
    
    if(num1 % 2 === 0){
        qtd_de_numeros_pares++
    }
    if(num2 % 2 === 0){
        qtd_de_numeros_pares++
    }
    if(num3 % 2 === 0){
        qtd_de_numeros_pares++
    }
    if(num4 % 2 === 0){
        qtd_de_numeros_pares++
    }
    if(num5 % 2 === 0){
        qtd_de_numeros_pares++
    }

    return qtd_de_numeros_pares
}


function calcular_qtd_de_numeros_positivos(num1, num2, num3, num4, num5){
    let qtd_de_numeros_positivos = 0

    if(num1 > 0){
        qtd_de_numeros_positivos++
    }
    if(num2 > 0){
       qtd_de_numeros_positivos++
    }
    if(num3 > 0){
        qtd_de_numeros_positivos++
    }
    if(num4 > 0){
        qtd_de_numeros_positivos++
    }
    if(num5 > 0){
        qtd_de_numeros_positivos++
    }

    return qtd_de_numeros_positivos
}


function calcular_qtd_de_numeros_negativos(num1, num2, num3, num4, num5){
    let qtd_de_numeros_negativos = 0

    if(num1 < 0){
        qtd_de_numeros_negativos++
    }
    if(num2 < 0){
       qtd_de_numeros_negativos++
    }
    if(num3 < 0){
        qtd_de_numeros_negativos++
    }
    if(num4 < 0){
        qtd_de_numeros_negativos++
    }
    if(num5 < 0){
        qtd_de_numeros_negativos++
    }

    return qtd_de_numeros_negativos
}


main()