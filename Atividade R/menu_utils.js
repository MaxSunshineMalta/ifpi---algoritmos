import { mostrar_texto, mostrar_texto_inline, obter_numero, obter_numero_aleatorio_na_faixa, obter_numero_maximo, obter_numero_positivo, obter_texto } from '../io_utils.js'

export function tamanho_da_colecao(colecao){
    let contador = 0

    for(let item of colecao){
        contador++
    }

    return contador
}


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


export function mapear_colecao(colecao, funcao){
    let colecao_transformada = []

    for(let item of colecao){
        const item_transformado = funcao(item)
        meu_push_para_arrays_sem_tamanho_definido(colecao_transformada, item_transformado)
    }

    return colecao_transformada
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


export function reduzir_colecao(colecao, funcao, valor_inicial){
    let acumulado = valor_inicial

    for(let item of colecao){
        acumulado = funcao(acumulado, item)
    }

    return acumulado
}


export function calcular_mediana_de_uma_colecao(colecao){
    const tamanho = tamanho_da_colecao(colecao)
    const colecao_ordenada = ordenar_com_quicksort(colecao)

    const valor_do_meio = Math.floor((tamanho - 1)/ 2) 
    
    if(tamanho === 1){
        const mediana = colecao[0]
        return mediana
    }else if(tamanho % 2 === 0){
        const mediana = (colecao_ordenada[valor_do_meio] + colecao_ordenada[valor_do_meio + 1]) / 2
        return mediana
    }else if(tamanho % 2 === 1){
        const mediana = colecao_ordenada[valor_do_meio]
        return mediana
    }
}


export function somatorio_de_uma_colecao(colecao){
    const somatorio = reduzir_colecao(colecao, (x, y) => x + y, 0)
    return somatorio
}


export function filtrar_numeros_negativos_de_uma_colecao(colecao){
    const negativos = filtrar_colecao(colecao, i => i < 0)
    return negativos
}


export function filtrar_numeros_positivos_de_uma_colecao(colecao){
    const positivos = filtrar_colecao(colecao, i => i > 0)
    return positivos
}


export function filtrar_numeros_neutros_de_uma_colecao(colecao){
    const neutros = filtrar_colecao(colecao, i => i === 0)
    return neutros
}


export function obter_maior_numero_de_uma_colecao(colecao){
    const maior_numero = reduzir_colecao(colecao, (x, y) => x > y ? x : y, -Infinity)
    return maior_numero
}


export function obter_menor_numero_de_uma_colecao(colecao){
    const menor_numero = reduzir_colecao(colecao, (x, y) => x < y ? x : y, +Infinity)
    return menor_numero
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


export function calcular_top_n_valores_de_uma_colecao(colecao, maior = true){
    let contador = 1
    let colecao_removendo_valores = colecao
    const tamanho = tamanho_da_colecao(colecao)
    const tamanho_do_top = obter_numero_maximo(`Qual o tamanho do seu top:`, tamanho)

    for(let i = 1; i <= tamanho_do_top; i++){
        if(maior){
            const maior_numero = obter_maior_numero_de_uma_colecao(colecao_removendo_valores)
            mostrar_texto(`>${contador} Lugar - ${maior_numero}`)
            colecao_removendo_valores = remover_item_da_colecao(colecao_removendo_valores, maior_numero, 1)
        }else{
            const menor_numero = obter_menor_numero_de_uma_colecao(colecao_removendo_valores)
            mostrar_texto(`>${contador} Lugar - ${menor_numero}`)
            colecao_removendo_valores = remover_item_da_colecao(colecao_removendo_valores, menor_numero, 1)
        }
        
        contador++
    }
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


export function filtrar_numeros_maiores_que_n_em_uma_colecao(colecao, valor){
    const numeros_maiores_que_n = filtrar_colecao(colecao, i => i > valor)

    return numeros_maiores_que_n
}


export function filtrar_numeros_menores_que_n_em_uma_colecao(colecao, valor){
    const numeros_menores_que_n = filtrar_colecao(colecao, i => i < valor)

    return numeros_menores_que_n
}


export function mostrar_elementos_de_uma_colecao_por_linha(colecao){
    for(let item of colecao){
        mostrar_texto(item)
    }
}


export function ordenar_com_quicksort(colecao, {chave = x => x, reverse = false} = {}){
    const tamanho = tamanho_da_colecao(colecao)
    if( tamanho <= 1){
        return colecao
    }

    const random_index = Math.floor(Math.random() * tamanho)
    const pivot = colecao[random_index]
    const colecao_com_pivo_removido = remover_item_da_colecao(colecao, pivot, 1)

    let left, right

    if(reverse){
        left = filtrar_colecao(colecao_com_pivo_removido, x => chave(x) > chave(pivot))
        right = filtrar_colecao(colecao_com_pivo_removido, x => chave(x) <= chave(pivot))
    }else{
        left = filtrar_colecao(colecao_com_pivo_removido, x => chave(x) <= chave(pivot))
        right = filtrar_colecao(colecao_com_pivo_removido, x => chave(x) > chave(pivot))
    }

    return ordenar_com_quicksort(left, {chave, reverse}).concat([pivot]).concat(ordenar_com_quicksort(right, {chave, reverse}))
}


export function filtrar_multiplos_de_n_de_uma_colecao(colecao, n){
    const multiplos_de_n = filtrar_colecao(colecao, i => i % n === 0)

    return multiplos_de_n
}


export function gerar_vetor_com_valores_não_repetidos(){
    const tamanho = obter_numero_positivo(`Qual o tamanho que deseja o vetor?`)
    let vetor = Array(tamanho)

    let valor_minimo = obter_numero('Qual valor mínimo do seu vetor?')
    let valor_maximo = obter_numero('Qual valor máximo do seu vetor?')
    let qtd_de_valores_possiveis = valor_maximo - valor_minimo + 1

    while(qtd_de_valores_possiveis < tamanho){
        mostrar_texto(`A quantidade de valores possíveis é insuficiente para o tamanho desejado, insira novos valores máximos e mínimos!`)
        valor_minimo = obter_numero('Qual valor mínimo do seu vetor?')
        valor_maximo = obter_numero('Qual valor máximo do seu vetor?')
        qtd_de_valores_possiveis = valor_maximo - valor_minimo + 1
    }

   let valores_possiveis = calcular_valores_possiveis_num_intervalo(valor_maximo, valor_minimo)
   vetor = sortear_elementos_de_uma_colecao(valores_possiveis, tamanho)

   return vetor
}


function calcular_valores_possiveis_num_intervalo(valor_maximo, valor_minimo){
    let valores_possiveis = []

    for(let i = valor_minimo; i <= valor_maximo; i++){
        meu_push_para_arrays_sem_tamanho_definido(valores_possiveis, i)
    }

    return valores_possiveis
}


export function show_vetor(vetor){
    mostrar_texto_inline('[')
    for (let item of vetor){
        mostrar_texto_inline(` ${item}`)
    }
    mostrar_texto(' ]')
}


export function eh_subcolecao(colecao, subcolecao_a_ser_verificada){
    const verificado = []
    let copy_subcolecao = [...subcolecao_a_ser_verificada] 

    while(tamanho_da_colecao(colecao) != 0 && tamanho_da_colecao(copy_subcolecao) != 0) {

        if(colecao[0] == copy_subcolecao[0]){
            meu_push_para_arrays_sem_tamanho_definido(verificado, copy_subcolecao[0])
            colecao = remover_item_da_colecao(colecao, colecao[0])
            copy_subcolecao = remover_item_da_colecao(copy_subcolecao, copy_subcolecao[0])
        } else {
            colecao = remover_item_da_colecao(colecao, colecao[0])
        }
    }

    if(tamanho_da_colecao(verificado) === tamanho_da_colecao(subcolecao_a_ser_verificada)){
        return true
    }else{
        return false
    }
}


export function enter_limpar_menu(){
    mostrar_texto('')
    obter_texto('>> Pressione ENTER para retornar ao Menu!!')
    console.clear()
}