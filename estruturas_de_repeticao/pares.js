import {obter_numero, mostrar_texto} from './my_io_utils.js'

function main(){
    const limite_inferior = obter_numero('Menor número:')
    const limite_superior = obter_numero('Maior número::')
    let inicio = limite_inferior
    let atual = inicio + 1
    let fim = limite_superior
    
    while(atual < fim){
        
        mostrar_pares(atual)
        atual++
    }

}


function mostrar_pares(atual){
    if ( atual % 2 === 0){
        mostrar_texto(atual)
    }
}

main()