import { mostrar_texto, obter_numero_positivo } from './my_io_utils.js'

function main(){
    const numero = obter_numero_positivo('Digite o número que seja saber o fatorial:')
    let fatorial = 1

    for (let i = numero; i > 1; i = i-= 2){
        fatorial = (i * (i - 1)) * fatorial 
    }

    mostrar_texto(` O fatorial de ${numero} é igual a ${fatorial}`)
}


main()