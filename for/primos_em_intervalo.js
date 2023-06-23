import { mostrar_texto, obter_numero } from "../estruturas_de_repeticao/my_io_utils.js"

function main(){
    const limite_inferior = obter_numero('Menor número:')
    const limite_superior = obter_numero('Maior número::')
    const inicio = limite_inferior
    const fim = limite_superior
    
    for (let atual = inicio + 1; atual < fim; atual++){
        mostrar_primos(atual)
    }
}


function mostrar_primos(atual){
    let candidato_a_primo = atual
    
    if (quantidade_de_divisores(candidato_a_primo) === 2){
        mostrar_texto(candidato_a_primo)
    }
}


function quantidade_de_divisores(candidato_a_primo){
    let qtd_de_divisores = 0

    for(let candidato = candidato_a_primo; candidato >= 1; candidato--)
        if (candidato_a_primo % candidato === 0){
            qtd_de_divisores++  
        }
    
    return qtd_de_divisores
}


main()