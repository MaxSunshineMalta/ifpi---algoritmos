import { mostrar_texto, obter_numero_positivo } from './my_io_utils.js'

function main(){
    const limite = obter_numero_positivo(`Digite o limite desejado:`)
    let sequencia = 0
    let soma = 1

    for(let i = 1; i <= limite; i++){
        sequencia = sequencia + soma
        mostrar_texto(sequencia)
        soma++
    }
}

main()