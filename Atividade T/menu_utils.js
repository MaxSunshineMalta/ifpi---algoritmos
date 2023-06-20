import {mostrar_texto, 
        obter_numero_aleatorio_na_faixa, 
        obter_texto } from "../io_utils.js"

export function meu_push_para_arrays_sem_tamanho_definido(colecao, valor){
    const tamanho = tamanho_da_colecao(colecao)
    
    if(tamanho === 0) {
        colecao[0] = valor
    }else{
        colecao[tamanho] = valor
    }
    
    return colecao
}


export function meu_push_para_arrays_com_tamanho_definido(colecao, valor){
    const tamanho = tamanho_da_colecao(colecao)

    for(let i = 0; i < tamanho; i++){
        if(colecao[i] === undefined){
            return colecao[i] = valor
        }
    }
}


export function tamanho_da_colecao(colecao){
    let contador = 0

    for(let item of colecao){
        contador++
    }

    return contador
}


export function remover_item_da_colecao(colecao, item_a_ser_removido, qtd_de_remocoes = 1){
    let colecao_com_item_removido = []
    let contador = 0
    for(let item of colecao){
        if(item === item_a_ser_removido && contador < qtd_de_remocoes){
            contador++
        }else if(item === item_a_ser_removido && contador >= qtd_de_remocoes){
            meu_push_para_arrays_sem_tamanho_definido(colecao_com_item_removido, item)
        }else if(item !== item_a_ser_removido){
            meu_push_para_arrays_sem_tamanho_definido(colecao_com_item_removido, item)
        }
    }

    return colecao_com_item_removido
} 


export function enter_limpar_menu(){
    mostrar_texto('')
    obter_texto('>> Pressione ENTER para retornar ao Menu!!')
    console.clear()
}


export function filtrar_colecao(colecao, criterio_de_filtragem){
    let colecao_filtrada = []

    for(let item of colecao){
        if (criterio_de_filtragem(item)){
            meu_push_para_arrays_sem_tamanho_definido(colecao_filtrada, item)
        }
    }

    return colecao_filtrada
}


export function obter_index(colecao, item){
    for(let i = 0; i < colecao.length; i++){
        if(colecao[i] === item){
            return i
        }
    }
}


export function sortear_elementos_de_uma_colecao(colecao, qtd_de_sorteios = 1){
    let tamanho = tamanho_da_colecao(colecao)
    let tamanho_para_colecoes = tamanho - 1

    if(qtd_de_sorteios > tamanho){
        return mostrar_texto(`A quantidade de sorteios excede o tamanho da coleção, insira uma quantidade menor ou igual a ${tamanho}`)
    }

    if(qtd_de_sorteios === 1){
        const index_aleatorio = obter_numero_aleatorio_na_faixa(tamanho_para_colecoes, 0)
        
        return colecao[index_aleatorio]
    }else{
        const array_com_numeros_sorteados = Array(qtd_de_sorteios)
        let colecao_retirando_valores_sorteados = colecao

        for(let i = 1; i <= qtd_de_sorteios; i++){
            const index_aleatorio = obter_numero_aleatorio_na_faixa(tamanho_para_colecoes, 0)
            meu_push_para_arrays_com_tamanho_definido(array_com_numeros_sorteados,colecao_retirando_valores_sorteados[index_aleatorio])
            colecao_retirando_valores_sorteados = remover_item_da_colecao(colecao_retirando_valores_sorteados, colecao_retirando_valores_sorteados[index_aleatorio], 1)
            tamanho = tamanho_da_colecao(colecao_retirando_valores_sorteados)
            tamanho_para_colecoes = tamanho - 1
        }

        return array_com_numeros_sorteados
    }
}