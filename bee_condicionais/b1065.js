import { question } from "readline-sync";

function main(){
    const num1 = obter_numero_inteiro()
    const num2 = obter_numero_inteiro()
    const num3 = obter_numero_inteiro()
    const num4 = obter_numero_inteiro()
    const num5 = obter_numero_inteiro()

    const qtd_de_numeros_pares = calcular_qtd_de_numeros_pares(num1, num2, num3, num4, num5)

    mostrar_texto(`${qtd_de_numeros_pares} valores pares`)
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


function calcular_qtd_de_numeros_pares(num1, num2, num3, num4, num5, num6){
    const valor_de_num1 = verificar_se_num1_eh_par(num1)
    const valor_de_num2 = verificar_se_num2_eh_par(num2)
    const valor_de_num3 = verificar_se_num3_eh_par(num3)
    const valor_de_num4 = verificar_se_num4_eh_par(num4)
    const valor_de_num5 = verificar_se_num5_eh_par(num5)

    const qtd_de_numeros_pares = valor_de_num1 + valor_de_num2 + valor_de_num3 + valor_de_num4 + valor_de_num5

    return qtd_de_numeros_pares

}


function verificar_se_num1_eh_par(num1){
    if(num1 % 2 === 0){
        return 1
    }else{
        return 0
    }
}


function verificar_se_num2_eh_par(num2){
    if(num2 % 2 === 0){
        return 1
    }else{
        return 0
    }
}


function verificar_se_num3_eh_par(num3){
    if(num3 % 2 === 0){
        return 1
    }else{
        return 0
    }
}


function verificar_se_num4_eh_par(num4){
    if(num4 % 2 === 0){
        return 1
    }else{
        return 0
    }
}


function verificar_se_num5_eh_par(num5){
    if(num5 % 2 === 0){
        return 1
    }else{
        return 0
    }
}


main()