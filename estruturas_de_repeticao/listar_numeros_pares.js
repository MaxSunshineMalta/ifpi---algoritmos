import {mostrar_texto, obter_numero_positivo} from './my_io_utils.js'

function main(){
    const numero = obter_numero_positivo('Digite um número:')
    let atual = 2
    let passo = 2

    while ( atual <= numero){
    
        mostrar_texto(atual)
        atual = atual + passo
    }


}

main()