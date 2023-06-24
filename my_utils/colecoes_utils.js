import { mostrar_texto, mostrar_texto_inline, obter_numero, obter_numero_aleatorio_na_faixa, obter_numero_maximo, obter_numero_positivo } from './io_utils.js'
import { elevar_numero } from './math_utils.js'
import { quebrar, remover_caractere, substituir_caractere, tamanho_do_texto } from './strings_utils.js'

export function show_vetor(vetor){
    mostrar_texto_inline('[')
    for (let item of vetor){
        mostrar_texto_inline(` ${item}`)
    }
    mostrar_texto(' ]')
}


export function preencher_manualmente_o_vetor(colecao){
    const tamanho_vetor = tamanho_da_colecao(colecao)
    let vetor_preenchido = []

    for(let i = 0; i < tamanho_vetor; i++){
        const valor = obter_numero('Digite o valor que deseja inserir no vetor:')
        meu_push_para_arrays_sem_tamanho_definido(vetor_preenchido, valor)
    }

    colecao = vetor_preenchido

    return colecao
}


export function tamanho_da_colecao(colecao){
    let contador = 0

    for(let item of colecao){
        contador++
    }

    return contador
}


export function gerar_vetor(valor_padrao = 0){
    const tamanho_vetor = obter_numero('Digite o tamanho que deseja o vetor:')
    
    let vetor_com_tamanho = Array(tamanho_vetor)

    for(let i = 0; i < tamanho_vetor; i++){
        vetor_com_tamanho[i] = valor_padrao
    }

    return vetor_com_tamanho
}


export function gerar_vetor_v1(tamanho_vetor, valor_padrao = 0){
    let vetor_com_tamanho = Array(tamanho_vetor)

    for(let i = 0; i < tamanho_vetor; i++){
        vetor_com_tamanho[i] = valor_padrao
    }

    return vetor_com_tamanho
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


export function elevar_colecao_a_n(colecao){
    const potencia = obter_numero('Digite a potência desejada:')
    let vetor_elevado = []

    for(let item of colecao){
        const item_elevado = elevar_numero(item, potencia)
        meu_push_para_arrays_sem_tamanho_definido(vetor_elevado, item_elevado)
    }

    return vetor_elevado
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


export function contar_numeros_positivos_negativos_e_zeros_de_uma_colecao(colecao){
    const positivos = filtrar_colecao(vetor, i => i > 0)
    const negativos = filtrar_colecao(vetor, i => i < 0)
    const zeros = filtrar_colecao(vetor, i => i === 0)
    mostrar_texto(`Há ${tamanho_da_colecao(positivos)} números positivos`)
    mostrar_texto(`Há ${tamanho_da_colecao(negativos)} números negativos`)
    mostrar_texto(`Há ${tamanho_da_colecao(zeros)} zeros`)
}


export function somar_todos_os_numeros_todos_os_positivos_e_todos_os_negativos_de_uma_colecao(vetor){
    const somatorio_geral = reduzir_colecao(vetor, (x, y) => x + y, 0)
    const positivos = filtrar_colecao(vetor, i => i > 0)
    const negativos = filtrar_colecao(vetor, i => i < 0)
    const somatorio_positivos = reduzir_colecao(positivos, (x, y) => x + y, 0)
    const somatorio_negativos = reduzir_colecao(negativos, (x, y) => x + y, 0)
    mostrar_texto(`Somatório Geral: ${somatorio_geral}`)
    mostrar_texto(`Somatório dos Números Positivos: ${somatorio_positivos}`)
    mostrar_texto(`Somatório dos Números Negativos: ${somatorio_negativos}`)
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


export function filtrar_multiplos_de_n_de_uma_colecao(colecao, n){
    const multiplos_de_n = filtrar_colecao(colecao, i => i % n === 0)

    return multiplos_de_n
}


export function contem_item(colecao, item_a_ser_verificado){
    for(let item of colecao){
        if(item === item_a_ser_verificado){
            return true
        }
    }

    return false
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


export function calcular_valores_possiveis_num_intervalo(valor_maximo, valor_minimo){
    let valores_possiveis = []

    for(let i = valor_minimo; i <= valor_maximo; i++){
        meu_push_para_arrays_sem_tamanho_definido(valores_possiveis, i)
    }

    return valores_possiveis
}

export function preencher_automaticamente_o_vetor(colecao){
    const tamanho_vetor = tamanho_da_colecao(colecao)
    const valor_minimo = obter_numero('Qual valor mínimo do seu vetor?')
    const valor_maximo = obter_numero('Qual valor máximo do seu vetor?')
    let vetor_preenchido = []

    for(let i = 0; i < tamanho_vetor; i++){
        const valor = obter_numero_aleatorio_na_faixa(valor_maximo, valor_minimo)
        meu_push_para_arrays_sem_tamanho_definido(vetor_preenchido, valor)
    }

    colecao = vetor_preenchido
    
    return colecao
}




/*let colecao_com_item_removido = []
    let contador = 0
    for(let index in colecao){
        if(colecao[index] === item_a_ser_removido && contador < qtd_de_remocoes){
            for(let i = 0; i < index; i++){
                meu_push(colecao_com_item_removido, colecao[i])
                
            }
            contador++
        }else if(colecao[index] === item_a_ser_removido && contador >= qtd_de_remocoes){
            meu_push(colecao_com_item_removido, colecao[index])
        }
    }*/
    



/*export function adicionar_valor_ao_vetor(valor, colecao){
    const adicao = colecao + ' ' + valor
    
    const vetor_com_valor_adicionado = quebrar(adicao, ' ')

    return vetor_com_valor_adicionado
}*/
