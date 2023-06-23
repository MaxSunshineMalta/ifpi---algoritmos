import { mostrar_texto, obter_numero_positivo } from './my_io_utils.js'

function main(){
    const limite = obter_numero_positivo('Digite o limite:')
    let somatorio = 0

    for(let i = 1; i <= limite; i++){
        somatorio = somatorio + i
    }

    mostrar_texto(`Somatório = ${somatorio}`)
}


main()