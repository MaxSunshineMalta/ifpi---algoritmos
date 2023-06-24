import { mostrar_texto, obter_texto } from './my_io_utils.js'

//Leia uma frase e gere uma nova frase, retirando os espaços entre as palavras.

function main(){
    const frase = obter_texto(`Digite a frase:`)

    let nova_frase = elaborar_nova_frase(frase)

    mostrar_texto(nova_frase)
}


function elaborar_nova_frase(frase){
    const nova_frase = frase.split(' ').join('')

    return nova_frase
}

main()