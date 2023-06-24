import { mostrar_texto, obter_texto } from './my_io_utils.js'

function main(){
    const verbo = obter_texto(`Digite o verbo que deseja conjugar no presente:`)

    const radical = obter_radical_do_verbo(verbo)
    const primeira_pessoa_do_singular = conjugar_verbo_na_primeira_pessoa_do_singular(radical)
    const segunda_pessoa_do_singular = conjugar_verbo_na_segunda_pessoa_do_singular(radical)
    const terceira_pessoa_do_singular = conjugar_verbo_na_terceira_pessoa_do_singular(radical)
    const primeira_pessoa_do_plural = conjugar_verbo_na_primeira_pessoa_do_plural(radical)
    const segunda_pessoa_do_plural = conjugar_verbo_na_segunda_pessoa_do_plural(radical)
    const terceira_pessoa_do_plural = conjugar_verbo_na_terceira_pessoa_do_plural(radical)

    mostrar_texto(`===== CONJUGAÇÃO DO VERBO: ${verbo} =====
    Eu ${primeira_pessoa_do_singular}
    Tu ${segunda_pessoa_do_singular}
    Ele/Ela ${terceira_pessoa_do_singular}
    Nós ${primeira_pessoa_do_plural}
    Vós ${segunda_pessoa_do_plural}
    Eles/Elas ${terceira_pessoa_do_plural}`)
}


function obter_radical_do_verbo(verbo){
    let radical = ''

    for(let i = 0; i < (verbo.length -2); i++){
        let caractere = verbo[i]
        radical = radical + caractere
    }

    return radical
}


function conjugar_verbo_na_primeira_pessoa_do_singular(radical){
    return radical + 'o'
}


function conjugar_verbo_na_segunda_pessoa_do_singular(radical){
    return radical + 'es'
}


function conjugar_verbo_na_terceira_pessoa_do_singular(radical){
    return radical + 'e'
}


function conjugar_verbo_na_primeira_pessoa_do_plural(radical){
    return radical + 'emos'
}


function conjugar_verbo_na_segunda_pessoa_do_plural(radical){
    return radical + 'eis'
}


function conjugar_verbo_na_terceira_pessoa_do_plural(radical){
    return radical + 'em'
}

main()