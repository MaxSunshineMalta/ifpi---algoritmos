import {obter_numero, mostrar_texto} from './my_io_utils.js'
import {is_prime} from './my_math_utils.js'

function main(){
    const limite_inferior = obter_numero('Menor número:')
    const limite_superior = obter_numero('Maior número::')
    
    mostrar_primos(limite_inferior, limite_superior)   
}


function mostrar_primos(inicio, fim){
    let atual = inicio + 1

    while(atual < fim){

        if(is_prime(atual)){
            mostrar_texto(atual)
        }

        atual++

    }
}


main()