export function eh_numero_perfeito(numero){
    let atual = numero - 1
    let somatorio = 0

    while (atual >= 1){
        if (eh_divisor(atual, numero)){
            somatorio = somatorio + atual
        }
        atual--
    }

    return somatorio === numero
}


export function eh_divisor(candidato, numero){
    return numero % candidato === 0
}


export function calcular_divisores(numero){
    let divisores = []

    for(let i = 1; i <= numero; i++){
        if( numero % i === 0){
            divisores.push(i)
        }
    }

    return divisores
}


export function calcular_qtd_de_divisores(numero){
    const divisores = calcular_divisores(numero)
    const qtd_de_divisores = divisores.length

    return qtd_de_divisores
}

export function calcular_mmc(numero1, numero2){
    let a = numero1
    let b = numero2
    let resto = undefined

    while(resto != 0){
        resto = a % b
        a = b
        b = resto
    }
    const mmc = (numero1 * numero2) / a

    return mmc
}


export function eh_par(numero){
    if(numero % 2 === 0){
        return true
    }else{
        return false
    }
}


export function eh_impar(numero){
    if(numero % 2 !== 0){
        return true
    }else{
        return false
    }
}


export function eh_primo(numero){
    const qtd_de_divisores = calcular_qtd_de_divisores(numero)
    if(qtd_de_divisores === 2){
        return true
    }else{
        return false
    }
}


export function calcular_raiz_quadrada(numero){
    return Math.sqrt(numero)
}


export function calcular_raiz_cubica(numero){
    return Math.pow(numero, (1/3))
}


export function calcular_raiz(numero, indice){
    return Math.pow(numero, (1/indice))
}


export function calcular_fatorial(numero){
    if(numero === 1){
        return 1
    }else{
        return numero * calcular_fatorial(numero - 1)
    }
}


export function elevar_numero(numero, potencia){
    return numero ** potencia
}


export function calcular_media_aritmetica(somatorio, qtd_de_elementos){
    return somatorio / qtd_de_elementos
}


export function fazer_arredondamento(valor){
    const unidade_decimal = ((valor * 10) % 10)
    const valor_a_ser_subtraido_para_retornar_inteiro_menor = unidade_decimal / 10
    const valor_a_ser_somado_para_retornar_inteiro_maior = 1 - valor_a_ser_subtraido_para_retornar_inteiro_menor
    
    if((unidade_decimal >= 1) && (unidade_decimal <= 4)){
        const inteiro_menor = valor - valor_a_ser_subtraido_para_retornar_inteiro_menor
        
        return inteiro_menor
    }else if(unidade_decimal < 10){
        const inteiro_maior = valor + valor_a_ser_somado_para_retornar_inteiro_maior
        
        return inteiro_maior
    }
}






