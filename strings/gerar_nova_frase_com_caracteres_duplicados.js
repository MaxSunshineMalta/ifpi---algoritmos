import { mostrar_texto_inline } from './my_io_utils.js'
import { mostrar_texto, obter_texto } from './my_io_utils.js'

//Leia uma frase e gere uma nova frase, duplicando cada caractere da frase digitada.
function main(){
    const frase = obter_texto(`Digite uma frase:`)

    const nova_frase = elaborar_nova_frase(frase)

    mostrar_texto(nova_frase)
}


function elaborar_nova_frase(frase){
    let nova_frase = '';
  
    for (let i = 0; i < frase.length; i++) {
        nova_frase = nova_frase + frase[i] + frase[i];
    }
  
    return nova_frase;
}

main()