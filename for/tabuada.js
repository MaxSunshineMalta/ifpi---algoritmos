import { mostrar_texto } from './my_io_utils.js'

function main(){
    let limite = 10

    for(let i = 1; i <= limite; i++){
        mostrar_tabuda_de_1_a_10(i, limite)
    }
}


function mostrar_tabuda_de_1_a_10(i, fim){
    mostrar_texto(`Tabuada do ${i}`)
    for(let candidato = 1; candidato <= fim; candidato++){
        const multiplicacao = candidato * i
        mostrar_texto(`${candidato} x ${i} = ${multiplicacao}`)
    }
}

main()