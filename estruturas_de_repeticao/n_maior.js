import {obter_numero, mostrar_texto} from './my_io_utils.js'

function main(){
    const limite = obter_numero('Digite um limite:')
    let quantidade = 0
    let maior = -Infinity

    while (quantidade < limite){
       let numero = obter_numero('Digite um número:')
        maior = maior > numero ? maior : numero
        quantidade++
        
    }

    mostrar_texto(`Entre os ${quantidade} números listados, o maior é ${maior}`)

}

main()