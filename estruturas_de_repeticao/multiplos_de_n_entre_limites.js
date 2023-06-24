//Leia N , LimiteSuperior e LimiteInferior e escreva todos os múltiplos de N entre os limites lidos.

import { mostrar_texto, obter_numero_positivo } from './my_io_utils.js'

function main(){
    const n = obter_numero_positivo('Qual o número que você deseja verificar os múltiplos entre um intervalo?')
    const limite_inferior = obter_numero_positivo('Qual o limite inferior?')
    const limite_superior = obter_numero_positivo('Qual o limite superior?')
    let atual = limite_inferior + 1

    while(atual < limite_superior){
        
        if(atual % n === 0){
            mostrar_texto(atual)
        }
        atual++
    }

}

main()