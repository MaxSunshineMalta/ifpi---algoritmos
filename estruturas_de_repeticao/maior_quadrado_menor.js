import { mostrar_texto, obter_numero_positivo } from './my_io_utils.js'

function main(){
    const limite = obter_numero_positivo('Digite o número que deseja:')
    let atual = 0
    
    
    while(atual * atual <= limite){
        atual++
    }

    atual--
    const quadrado = atual * atual
    
    mostrar_texto(`O maior quadrado menor ou igual a N é ${quadrado}`)
}

main()