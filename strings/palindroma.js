import { inverter_frase, mostrar_texto, obter_numero, obter_texto } from './my_io_utils.js'

function main(){
    const palavra = obter_texto(`Digite uma palavra:`)

    const palavra_invertida = inverter_frase(palavra)
    const situacao = verificar_se_palindroma(palavra, palavra_invertida)

    mostrar_texto(`A palavra ${palavra} ${situacao} palíndroma`)
}


function verificar_se_palindroma(palavra, palavra_invertida){
    if(palavra === palavra_invertida){
        return 'é'
    }else{
        return 'não é'
    }
}

main()