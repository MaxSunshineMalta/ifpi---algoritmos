import { mostrar_texto, mostrar_texto_inline } from './my_io_utils.js'

export function eh_numero_perfeito(numero){
    // True -> perfeito
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

export function mostrar_somatorio_divisores(numero){
    let atual = numero - 1
    mostrar_texto_inline(' > ')
    let eh_o_primeiro = true
    while (atual >= 1){
        if (eh_divisor(atual, numero)){
            if (eh_o_primeiro){
                eh_o_primeiro = false
                mostrar_texto_inline(`${atual}`)
            }else{
                mostrar_texto_inline(` + ${atual}`)
            }
        }
        atual--
    }
    mostrar_texto(` == ${numero}`)
}

export function maximo_entre_tres_diferentes(valor1, valor2, valor3){
    if (valor1 > valor2 && valor1 > valor3){
        return valor1
    }else if (valor2 > valor1 && valor2 > valor3){
        return valor2
    }else if (valor3 > valor1 && valor3 > valor2){
        return valor3
    }else if (valor1 === valor2 && valor1 > valor3){
        return valor1
    }else if (valor1 === valor3 && valor1 > valor2){
        return valor1
    }else if (valor2 === valor3 && valor2 > valor1){
        return valor2
    }
}
export function is_prime(numero){
    return quantity_of_divisors(numero) === 2
}


export function quantity_of_divisors(numero){
    let divisor_candidate = numero
    let qtt_divisors = 0

    while (divisor_candidate >= 1){

        if (numero % divisor_candidate === 0){
            qtt_divisors++
        }
        
        divisor_candidate--
    }
    
    return qtt_divisors
}

