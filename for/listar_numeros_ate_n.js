import {obter_numero_positivo} from './my_io_utils.js'

function main(){
    const limite = obter_numero_positivo('Digite o limite:')

    for (let i = 1; i <= limite; i++){
        console.log(i)
    }
}


main()