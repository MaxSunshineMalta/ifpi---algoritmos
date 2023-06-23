import { mostrar_texto, obter_numero_positivo } from './my_io_utils.js'

function main(){
    const limite = obter_limite_valido()
    let primeiro_termo_da_soma = 0
    let segundo_termo_da_soma = 1
    let sequencia = 0

    if(limite === 2){
        mostrar_texto(primeiro_termo_da_soma)
        mostrar_texto(segundo_termo_da_soma)
    }else{
        mostrar_texto(primeiro_termo_da_soma)
        mostrar_texto(segundo_termo_da_soma)
        for(let i =2; i < limite; i++){
            sequencia = primeiro_termo_da_soma + segundo_termo_da_soma
            primeiro_termo_da_soma = segundo_termo_da_soma
            segundo_termo_da_soma = sequencia
            mostrar_texto(sequencia)
        }
    }
}


function obter_limite_valido(label = 'Qual o limite escolhido?'){
    let limite = obter_numero_positivo(label)
    
    while (limite < 2){
        
        mostrar_texto('Favor digite um limite válido')
        
        limite = obter_numero_positivo(label)
    }

    return limite
}

main()