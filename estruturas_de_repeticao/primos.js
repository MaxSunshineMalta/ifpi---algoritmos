import {obter_numero, mostrar_texto} from './my_io_utils.js'

function main(){
    const limite_inferior = obter_numero('Menor número:')
    const limite_superior = obter_numero('Maior número::')
    const inicio = limite_inferior
    let atual = inicio + 1
    const fim = limite_superior
    
    while(atual < fim){
        
        mostrar_primos(atual)
        atual++

    }
}


function mostrar_primos(atual){
    let candidato_a_primo = atual
    
    if (quantidade_de_divisores(candidato_a_primo) === 2){
        mostrar_texto(candidato_a_primo)
    }
}


function quantidade_de_divisores(candidato_a_primo){
    let candidato = candidato_a_primo
    let divisores = 0

    while (candidato >= 1){

        if (candidato_a_primo % candidato === 0){
            divisores++
        }
        
        candidato--
    }
    
    return divisores
}


main()