import { mostrar_texto, obter_numero, obter_numero_positivo } from './my_io_utils.js'

function main(){
    const limite = obter_numero_positivo('Defina o limite da sequência:')
    let sequencia = 1
    let razao = 2
    let contador = 0

    while(contador < limite){
        mostrar_texto(sequencia)
        sequencia = sequencia + razao
        razao++
        contador++

        
    }
}

main()