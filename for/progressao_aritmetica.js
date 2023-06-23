import { obter_numero_positivo } from './my_io_utils.js'

function main(){
    const valor_inicial = obter_numero_positivo('Digite o valor inicial:')
    const limite = obter_numero_positivo('Digite o limite da progressão aritmética:')
    const razao = obter_numero_positivo('Digite a razão da progressão aritmética:')
    
    for(let i = valor_inicial; i < limite; i+= razao){
        console.log(i)
    }
}


main()