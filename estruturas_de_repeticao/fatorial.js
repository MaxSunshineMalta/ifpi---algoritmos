import { mostrar_texto, obter_numero_positivo } from "./my_io_utils.js";

function main(){
    const valor = obter_numero_positivo('Digite o número que você quer saber o fatorial:')
    let numero = valor
    let antecessor_do_numero = numero - 1
    let passo = 2
    let fatorial = 1

    while ( antecessor_do_numero >= 1){
        fatorial = fatorial * numero * antecessor_do_numero
        numero = numero - passo
        antecessor_do_numero = antecessor_do_numero - passo
    }

    mostrar_texto(`O valor fatorial de ${valor} é ${fatorial}`)
}


main()