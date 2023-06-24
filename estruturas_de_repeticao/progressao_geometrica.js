import {mostrar_texto, obter_numero} from './my_io_utils.js'

function main(){
    let a_0 = obter_numero('Digite o valor inical:')
    const r = obter_numero('Digite a o valor que deseja atribuir a razão da progressão aritmética:')
    const limite = obter_numero('Digite o valor final:')
    mostrar_numeros_menores_que_limite(a_0, r, limite)
}

function mostrar_numeros_menores_que_limite(a_0, r, limite){
    const fim = limite
    let atual = a_0
    const passo = r

    while (atual < fim){
        mostrar_texto(atual)
        atual = atual * passo
    }
}


main()