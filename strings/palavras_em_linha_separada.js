import { mostrar_texto, obter_texto } from './my_io_utils.js'

function main(){
    const frase = obter_texto(`Digite uma frase:`)
    let palavras = frase.split(' ')

    for(let i = 0; i < palavras.length; i++){
        mostrar_texto(palavras[i])
    }
}

main()