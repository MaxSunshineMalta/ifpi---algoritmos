import { mostrar_texto, obter_numero, obter_numero_positivo } from './my_io_utils.js'

function main(){
    const limite = obter_numero_positivo('Digite o limite da lista:')
    
    const maior = definir_maior(limite)

    mostrar_texto(`Maior número da lista: ${maior}`)
}


function definir_maior(limite){
    let maior = -Infinity

    for(let i = 1; i <= limite; i++){
        let numero = obter_numero('Digite um número:')
        maior = maior > numero ? maior : numero
    }

    return maior
}

main()