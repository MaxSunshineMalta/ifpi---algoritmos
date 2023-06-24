import { mostrar_texto, obter_texto } from './my_io_utils.js' 

//Faça a criptografia de uma frase digitada pelo usuário. Na criptografia, a frase deverá ser invertida e as
//consoantes deverão ser substituídas pelo caractere #.
function main(){
    const frase = obter_texto(`Digite uma frase:`)
    
    const frase_invertida = inverter_frase(frase)
    const frase_invertida_e_criptografada = criptografar_frase_invertida(frase_invertida)

    mostrar_texto(frase_invertida_e_criptografada)
}


function inverter_frase(frase){
    let frase_invertida = ''
    const tamanho = frase.length - 1

    for(let i = tamanho; i >= 0; i--){
        let caractere = frase[i]
        frase_invertida = frase_invertida + caractere
    }

    return frase_invertida
}


function criptografar_frase_invertida(frase_invertida){
    let frase_criptografada = ''

    for(let i = 0; i < frase_invertida.length; i++){
        let caractere = frase_invertida[i]

        if(eh_vogal(caractere)){
            frase_criptografada = frase_criptografada + caractere
        }else{
            frase_criptografada = frase_criptografada + '#'
        }
    }

    return frase_criptografada
}


function eh_vogal(caractere){
    return caractere === 'a' ||caractere === 'e' || caractere === 'i' || caractere === 'o' || caractere === 'u'|| caractere === ' '
}

main()