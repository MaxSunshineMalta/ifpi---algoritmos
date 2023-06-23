import { question } from "readline-sync";

function main(){
    const num1 = obter_numero_nao_nulo()
    const num2 = obter_numero_nao_nulo()
    const num3 = obter_numero_nao_nulo()
    const num4 = obter_numero_nao_nulo()
    const num5 = obter_numero_nao_nulo()
    const num6 = obter_numero_nao_nulo()

    const qtd_de_numeros_positivos = calcular_qtd_de_numeros_positivos(num1, num2, num3, num4, num5, num6)
    const somatorio = calcular_somatorio_dos_valores_positivos(num1, num2, num3, num4, num5, num6)
    const media = somatorio / qtd_de_numeros_positivos

    mostrar_texto(`${qtd_de_numeros_positivos} valores positivos`)
    mostrar_texto(media.toFixed(1))
}


function mostrar_texto(texto){
    return console.log(texto)
}


function obter_numero_nao_nulo(label = 'Dgite um número diferente de 0:'){
    let numero = Number(question(label))

    while(numero === 0){
        mostrar_texto('Favor digite um número diferente de 0!')
        numero = Number(question(label))
    }

    return numero
}


function calcular_somatorio_dos_valores_positivos(num1, num2, num3, num4, num5, num6){
    let somatorio = 0

    if(num1 > 0){
        somatorio = somatorio + num1
    }
    if(num2 > 0){
        somatorio = somatorio + num2
    }
    if(num3 > 0){
        somatorio = somatorio + num3
    }
    if(num4 > 0){
        somatorio = somatorio + num4
    }
    if(num5 > 0){
        somatorio = somatorio + num5
    }
    if(num6 > 0){
        somatorio = somatorio + num6
    }

    return somatorio
}


function calcular_qtd_de_numeros_positivos(num1, num2, num3, num4, num5, num6){
    const valor_de_num1 = verificar_valor_de_num1(num1)
    const valor_de_num2 = verificar_valor_de_num2(num2)
    const valor_de_num3 = verificar_valor_de_num3(num3)
    const valor_de_num4 = verificar_valor_de_num4(num4)
    const valor_de_num5 = verificar_valor_de_num5(num5)
    const valor_de_num6 = verificar_valor_de_num6(num6)

    const qtd_de_numeros_positivos = valor_de_num1 + valor_de_num2 + valor_de_num3 + valor_de_num4 + valor_de_num5+ valor_de_num6

    return qtd_de_numeros_positivos

}


function verificar_valor_de_num1(num1){
    if(num1 > 0){
        return 1
    }else{
        return 0
    }
}


function verificar_valor_de_num2(num2){
    if(num2 > 0){
        return 1
    }else{
        return 0
    }
}


function verificar_valor_de_num3(num3){
    if(num3 > 0){
        return 1
    }else{
        return 0
    }
}


function verificar_valor_de_num4(num4){
    if(num4 > 0){
        return 1
    }else{
        return 0
    }
}


function verificar_valor_de_num5(num5){
    if(num5 > 0){
        return 1
    }else{
        return 0
    }
}


function verificar_valor_de_num6(num6){
    if(num6 > 0){
        return 1
    }else{
        return 0
    }
}

main()