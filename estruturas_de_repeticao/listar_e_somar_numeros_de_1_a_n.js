import {mostrar_texto, obter_numero_positivo} from './my_io_utils.js'

function main(){
    const numero_n = obter_numero_positivo('Digite um número:')
    let atual = 1
    let somatorio = 0


    while(atual <= numero_n){
        mostrar_texto(atual)
        somatorio = somatorio + atual
        atual++
    }

    mostrar_texto(`Somatório final: ${somatorio}`)

}

main()