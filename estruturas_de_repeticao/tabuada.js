import {mostrar_texto, obter_numero_positivo} from './my_io_utils.js'

function main(){
    let atual = 1
    let fim = 10
    
    mostrar_texto(`============TABUADA DO 1 AO 10==============`)
    while(atual <= fim){
        const tabuada = calcular_tabuada_de_um_a_dez(atual, fim)

        atual++
    }

}


function calcular_tabuada_de_um_a_dez(atual, fim){
    let candidato_a_numero = 1
    
    mostrar_texto(`Tabudado do número ${atual}`)

    while(candidato_a_numero <= fim){

        const multiplicacao = atual * candidato_a_numero
        mostrar_texto(multiplicacao)
        candidato_a_numero++
    }
}

main()