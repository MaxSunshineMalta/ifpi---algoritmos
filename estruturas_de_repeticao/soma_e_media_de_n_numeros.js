import {mostrar_texto, obter_numero_positivo} from './my_io_utils.js'

function main(){
    const numero_n = obter_numero_positivo('Digite quantos números você quer calcular a média?:')
    let quantidade = 0
    let somatorio = 0

    while (quantidade < numero_n){
        let numero = obter_numero_positivo('Digite um número:')

        somatorio = somatorio + numero
        quantidade++
    
    }

    const media = somatorio / quantidade
    mostrar_texto(`${quantidade} números foram registrados, obtendo a soma ${somatorio} e a média ${media.toFixed(2)}`)
    
}


main()