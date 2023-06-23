import { mostrar_texto, obter_numero, obter_numero_positivo } from './my_io_utils.js'

function main(){
    const limite_inferior = obter_numero_positivo('Digite o limite inferior do intervalo:')
    const limite_superior = obter_numero_positivo('Digite o limite superior do intervalo:')

    mostrar_pares_no_intervalo(limite_inferior, limite_superior)
}


function mostrar_pares_no_intervalo(li, ls){
    for (let i = li + 1; i < ls; i++){
        if(i % 2 === 0){
            mostrar_texto(i)
        }
    }
}


main()