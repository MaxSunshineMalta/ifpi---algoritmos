import { mostrar_texto, obter_numero_positivo } from './my_io_utils.js'

function main(){
    const limite = obter_numero_positivo('Digite um limite:')
    let atual = 1

    while(atual <= limite){
        if(atual % 2 === 0){
            mostrar_texto(atual)
        }

        atual++
    }

}

main()