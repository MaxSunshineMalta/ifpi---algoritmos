import {mostrar_texto, obter_numero_positivo} from './my_io_utils.js'

function main(){
    const numero_n = obter_numero_positivo('Digite um número:')
    let atual = 1


    while(atual <= numero_n){
        mostrar_texto(atual)
        atual++
    }


}

main()