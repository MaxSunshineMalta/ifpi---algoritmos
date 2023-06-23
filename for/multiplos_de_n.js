import { mostrar_texto, obter_numero, obter_numero_positivo } from './my_io_utils.js'

function main(){
    const n = obter_numero_positivo('Digite o número que deseja obter os múltiplos:')
    const limite_inferior = obter_numero_positivo('Digite o limite inferior do intervalo:')
    const limite_superior = obter_numero_positivo('Digite o limite superior do intervalo:')

    mostrar_multiplos_de_n_no_intervalo(n, limite_inferior, limite_superior)
}


function mostrar_multiplos_de_n_no_intervalo(n, li, ls){
    for(let i = li + 1; i < ls; i++){
        if(i % n === 0){
            mostrar_texto(i)
        }
    }
}

main()