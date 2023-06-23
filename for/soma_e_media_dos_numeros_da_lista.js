import { mostrar_texto, obter_numero, obter_numero_positivo } from './my_io_utils.js'

function main(){
    const limite = obter_numero_positivo('Digite o limite da lista:')
    
    const somatorio = calcular_somatorio(limite)
    const media = somatorio / limite

    mostrar_texto(`Somatório: ${somatorio}`)
    mostrar_texto(`Média: ${media.toFixed(1)}`)
}


function calcular_somatorio(limite){
    let somatorio = 0

    for(let i = 1; i <= limite; i++){
        let numero = obter_numero('Digite um número:')
        somatorio += numero
    }

    return somatorio
}

main()