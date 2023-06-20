import {mostrar_texto,
        obter_numero,
        obter_numero_positivo } from "../io_utils.js";

import {calcular_media_aritmetica,
            calcular_mmc,
            eh_impar,
            eh_par } from "../math_utils.js";
    
import {tamanho_da_colecao,
            meu_push_para_arrays_sem_tamanho_definido,
            filtrar_colecao,
            reduzir_colecao,
            mapear_colecao,
            calcular_mediana_de_uma_colecao,
            somatorio_de_uma_colecao,
            filtrar_numeros_negativos_de_uma_colecao,
            filtrar_numeros_positivos_de_uma_colecao,
            filtrar_numeros_neutros_de_uma_colecao,
            obter_maior_numero_de_uma_colecao,
            obter_menor_numero_de_uma_colecao,
            sortear_elementos_de_uma_colecao,
            remover_item_da_colecao,
            calcular_top_n_valores_de_uma_colecao,
            filtrar_numeros_maiores_que_n_em_uma_colecao,
            filtrar_numeros_menores_que_n_em_uma_colecao,
            mostrar_elementos_de_uma_colecao_por_linha,
            ordenar_com_quicksort,
            filtrar_multiplos_de_n_de_uma_colecao,
            gerar_vetor_com_valores_não_repetidos, 
            eh_subcolecao} from "./menu_utils.js"

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


export function gerar_vetor(){
    const tamanho_vetor = obter_numero('Digite o tamanho que deseja o vetor:')
    
    let vetor_com_tamanho = Array(tamanho_vetor)
    mostrar_texto(`Digite 1 se deseja preencher com o valor padrão e 2 se deseja não preencher com o valor padrão:`)
    const tipo = obter_opcao_valida()

    if(tipo === 1){
        const valor_padrao = obter_numero('qual valor padrão desejado?')

        for(let i = 0; i < tamanho_vetor; i++){
            vetor_com_tamanho[i] = valor_padrao
        }

        return vetor_com_tamanho
    }else{
        return vetor_com_tamanho
    }
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


function obter_numero_aleatorio_na_faixa(valor_maximo, valor_minimo){
    return Math.floor(Math.random() * (valor_maximo + 1 - valor_minimo) + valor_minimo)
}


export function mostrar_vetor(vetor){
    mostrar_texto('============== V E T O R ===============')
    mostrar_texto('')
    mostrar_texto(`> [${vetor}]`)
}



export function elevar_vetor_a_n(vetor){
    const n = obter_numero('Digite o número a que deseja elevar:')

    mostrar_texto('')
    mostrar_texto(`Vetor antes de elevar a ${n}: [${vetor}]`)

    vetor = mapear_colecao(vetor, i => i ** n)
    
    mostrar_texto(`Vetor depois de elevar a ${n}: [${vetor}]`)
}

export function contar_os_numeros_positivos_os_negativos_e_os_zeros(vetor){
    const positivos = filtrar_numeros_positivos_de_uma_colecao(vetor)
    const negativos = filtrar_numeros_negativos_de_uma_colecao(vetor)
    const zeros = filtrar_numeros_neutros_de_uma_colecao(vetor)
    
    mostrar_texto(`Todos os valores do vetor: [${vetor}]`)
    mostrar_texto(`valores positivos: [${positivos}]`)
    mostrar_texto(`valores negativos: [${negativos}]`)
    mostrar_texto(`valores neutros: [${zeros}]`)
    mostrar_texto('')

    mostrar_texto(`Há ${tamanho_da_colecao(positivos)} números positivos`)
    mostrar_texto(`Há ${tamanho_da_colecao(negativos)} números negativos`)
    mostrar_texto(`Há ${tamanho_da_colecao(zeros)} zeros`)
}


export function somar_todos_os_numeros_todos_os_positivos_e_todos_os_negativos(vetor){
    const positivos = filtrar_numeros_positivos_de_uma_colecao(vetor)
    const negativos = filtrar_numeros_negativos_de_uma_colecao(vetor)
    const somatorio_geral = somatorio_de_uma_colecao(vetor)
    const somatorio_positivos = somatorio_de_uma_colecao(positivos)
    const somatorio_negativos = somatorio_de_uma_colecao(negativos)

    mostrar_texto(`Todos os valores do vetor: [${vetor}]`)
    mostrar_texto(`valores positivos: [${positivos}]`)
    mostrar_texto(`valores negativos: [${negativos}]`)
    mostrar_texto('')

    mostrar_texto(`Somatório Geral: ${somatorio_geral}`)
    mostrar_texto(`Somatório dos Números Positivos: ${somatorio_positivos}`)
    mostrar_texto(`Somatório dos Números Negativos: ${somatorio_negativos}`)
}


export function media_e_mediana_de_todos_os_numeros_dos_numeros_positivos_e_dos_numeros_negativos(vetor){
    const positivos = filtrar_numeros_positivos_de_uma_colecao(vetor)
    const negativos = filtrar_numeros_negativos_de_uma_colecao(vetor)
    const vetor_em_ordem_crescente = ordenar_com_quicksort(vetor)
    const positivos_em_ordem_crescente = ordenar_com_quicksort(positivos)
    const negativos_em_ordem_crescente = ordenar_com_quicksort(negativos)

    const qtd_total_de_numeros = tamanho_da_colecao(vetor)
    const qtd_de_numeros_positivos =  tamanho_da_colecao(positivos)
    const qtd_de_numeros_negativos = tamanho_da_colecao(negativos)

    const somatorio_geral = somatorio_de_uma_colecao(vetor)
    const somatorio_positivos = somatorio_de_uma_colecao(positivos)
    const somatorio_negativos = somatorio_de_uma_colecao(negativos)

    const media_de_todos_os_numeros = calcular_media_aritmetica(somatorio_geral, qtd_total_de_numeros)
    const media_de_numeros_positivos = calcular_media_aritmetica(somatorio_positivos, qtd_de_numeros_positivos)
    const media_de_numeros_negativos = calcular_media_aritmetica(somatorio_negativos, qtd_de_numeros_negativos) 

    const mediana_de_todos_os_numeros = calcular_mediana_de_uma_colecao(vetor)
    const mediana_dos_numeros_positivos = calcular_mediana_de_uma_colecao(positivos)
    const mediana_dos_numeros_negativos = calcular_mediana_de_uma_colecao(negativos)

    mostrar_texto(`Todos os valores do vetor em ordem crescente: [${vetor_em_ordem_crescente}]`)
    mostrar_texto(`valores positivos em ordem crescente: [${positivos_em_ordem_crescente}]`)
    mostrar_texto(`valores negativos em ordem crescente: [${negativos_em_ordem_crescente}]`)
    mostrar_texto('')
    
    mostrar_texto(`Para todos os números: A média é ${media_de_todos_os_numeros.toFixed(2)} e a mediana é ${mediana_de_todos_os_numeros}`)
    
    if(qtd_de_numeros_positivos === 0){
        mostrar_texto(`Para os números positivos: A média e a mediana são nulas`)
    }else{
        mostrar_texto(`Para os números positivos: A média é ${media_de_numeros_positivos.toFixed(2)} e a mediana é ${mediana_dos_numeros_positivos}`)
    }

    if(qtd_de_numeros_negativos === 0){
        mostrar_texto(`Para os números negativos: A média e a mediana são nulas`)
    }else{
        mostrar_texto(`Para os números negativos: A média é ${media_de_numeros_negativos.toFixed(2)} e a mediana é ${mediana_dos_numeros_negativos}`)
    }
}


export function maior_e_menor_numero(vetor){
    const maior = obter_maior_numero_de_uma_colecao(vetor)
    const menor = obter_menor_numero_de_uma_colecao(vetor)
    const vetor_em_ordem_crescente = ordenar_com_quicksort(vetor)

    mostrar_texto(`Todos os valores do vetor em ordem crescente: [${vetor_em_ordem_crescente}]`)
    mostrar_texto(`Maior número: ${maior}`)
    mostrar_texto(`Menor número: ${menor}`)
}


export function sortear_um_numero_positivo_e_um_negativo(vetor){
    const positivos = filtrar_numeros_positivos_de_uma_colecao(vetor)
    const negativos = filtrar_numeros_negativos_de_uma_colecao(vetor)

    const tamanho_positivos = tamanho_da_colecao(positivos)
    const tamanho_negativos = tamanho_da_colecao(negativos)

    mostrar_texto(`Todos os valores positivos: [${positivos}]`)
    mostrar_texto(`Todos os valores negativos: [${negativos}]`)
    mostrar_texto('')

    if(tamanho_negativos > 0 && tamanho_positivos > 0){
        const positivo_aleatorio = sortear_elementos_de_uma_colecao(positivos)
        const negativo_aleatorio = sortear_elementos_de_uma_colecao(negativos)

        mostrar_texto(`Positivo sorteado: ${positivo_aleatorio}`)
        mostrar_texto(`Negativo Sorteado: ${negativo_aleatorio}`)
    }else if(tamanho_negativos === 0 && tamanho_positivos === 0){
        mostrar_texto(`Não existem valores positivos para sortear!!`)
        mostrar_texto(`Não existem valores negativos para sortear!!`)
    }else if(tamanho_negativos > 0 && tamanho_positivos === 0){
        const negativo_aleatorio = sortear_elementos_de_uma_colecao(negativos)
        
        mostrar_texto(`Não existem valores positivos para sortear!!`)
        mostrar_texto(`Negativo Sorteado: ${negativo_aleatorio}`)
    }else{
        const positivo_aleatorio = sortear_elementos_de_uma_colecao(positivos)
        
        mostrar_texto(`Positivo sorteado: ${positivo_aleatorio}`)
        mostrar_texto(`Não existem valores negativos para sortear!!`)
    }
}


export function calcular_n_maiores_valores(vetor){
    calcular_top_n_valores_de_uma_colecao(vetor, true)
}

export function calcular_n_menores_valores(vetor){
    calcular_top_n_valores_de_uma_colecao(vetor, false)
}


export function listar_media_e_valores_maiores_e_menores_que_a_media(vetor){
    const somatorio = somatorio_de_uma_colecao(vetor)
    const qtd_de_elementos = tamanho_da_colecao(vetor)
    const media = calcular_media_aritmetica(somatorio, qtd_de_elementos)
    
    mostrar_texto(`Média: ${media.toFixed(2)}`)
    mostrar_texto('')

    const numeros_maiores_que_a_media = filtrar_numeros_maiores_que_n_em_uma_colecao(vetor, media)
    const numeros_menores_que_a_media = filtrar_numeros_menores_que_n_em_uma_colecao(vetor, media)
    const numeros_maiores_que_a_media_ordenados = ordenar_com_quicksort(numeros_maiores_que_a_media, {chave: undefined, reverse: false})
    const numeros_menores_que_a_media_ordenados = ordenar_com_quicksort(numeros_menores_que_a_media, {chave: undefined, reverse: true})

    mostrar_texto(`> Lista de números maiores que a média:`)
    mostrar_elementos_de_uma_colecao_por_linha(numeros_maiores_que_a_media_ordenados)
    
    mostrar_texto(`> Lista de números menores que a média:`)
    mostrar_elementos_de_uma_colecao_por_linha(numeros_menores_que_a_media_ordenados)
}


export function somar_media_dos_numeros_positivos_multiplos_de_2_com_o_produto_acumulado_dos_numeros_negativos_pares_reduzidos_a_metade(vetor){
    const positivos = filtrar_numeros_positivos_de_uma_colecao(vetor)
    const negativos = filtrar_numeros_negativos_de_uma_colecao(vetor)

    const positivos_multiplos_de_2 = filtrar_colecao(positivos, i => i % 2 === 0)
    const somatorio_multiplos_de_2 = somatorio_de_uma_colecao(positivos_multiplos_de_2)
    const qtd_de_numeros_positivos_multiplos_de_2 = tamanho_da_colecao(positivos_multiplos_de_2)
    const media_dos_numeros_positivos_multiplos_de_2 = calcular_media_aritmetica(somatorio_multiplos_de_2, qtd_de_numeros_positivos_multiplos_de_2)

    const negativos_pares = filtrar_colecao(negativos, eh_par)
    const negativos_pares_divididos_por_2 = mapear_colecao(negativos_pares, i => i / 2)
    const produto_acumulado_dos_negativos_pares_divididos_por_2 = reduzir_colecao(negativos_pares_divididos_por_2, (x, y) => x * y, 1)

    const soma_da_media_dos_numeros_positivos_multiplos_de_2_com_o_produto_acumulado_dos_numeros_negativos_pares_reduzidos_a_metade = media_dos_numeros_positivos_multiplos_de_2 + produto_acumulado_dos_negativos_pares_divididos_por_2

    mostrar_texto('Somatório da Média dos Números Positivos múltiplos dois com o Produto acumulado dos números negativos pares reduzidos à metade:')
    mostrar_texto(`>> ${soma_da_media_dos_numeros_positivos_multiplos_de_2_com_o_produto_acumulado_dos_numeros_negativos_pares_reduzidos_a_metade}`)
}


export function ordenar(vetor, crescente = true){
    const menu = menu_de_ordenar()

    const opcao = obter_opcao_valida_menu(menu)

    if(crescente){
        if(opcao === 1){
            const vetor_todo_ordenado = ordenar_com_quicksort(vetor)

            mostrar_texto(`Todos os valores do vetor: [${vetor}]`)
            mostrar_texto('')
            mostrar_texto(`Vetor ordenado: [${vetor_todo_ordenado}]`)
        }else if(opcao === 2){
            const pares = filtrar_colecao(vetor, eh_par)
            const pares_ordenados = ordenar_com_quicksort(pares)
        
            mostrar_texto(`Todos os valores pares do vetor: [${pares}]`)
            mostrar_texto('')
            mostrar_texto(`Vetor dos valores pares ordenado: [${pares_ordenados}]`)
        }else if(opcao === 3){
            const impares = filtrar_colecao(vetor, eh_impar)
            const impares_ordenados = ordenar_com_quicksort(impares)
       
            mostrar_texto(`Todos os valores ímpares do vetor: [${impares}]`)
            mostrar_texto('')
            mostrar_texto(`Vetor dos valores ímpares ordenado: [${impares_ordenados}]`)
        }else if(opcao === 4){
            const positivos = filtrar_numeros_positivos_de_uma_colecao(vetor)
            const positivos_ordenados = ordenar_com_quicksort(positivos)
       
            mostrar_texto(`Todos os valores positivos do vetor: [${positivos}]`)
            mostrar_texto('')
            mostrar_texto(`Vetor dos valores positivos ordenado: [${positivos_ordenados}]`)
        }else if(opcao === 5){
            const negativos = filtrar_numeros_negativos_de_uma_colecao(vetor)
            const negativos_ordenados = ordenar_com_quicksort(negativos)
        
            mostrar_texto(`Todos os valores negativos do vetor: [${negativos}]`)
            mostrar_texto('')
            mostrar_texto(`Vetor dos valores negativos ordenado: [${negativos_ordenados}]`)
        }else if(opcao === 6){
            ordenar_apenas_os_multiplos_de_n(vetor, true)
        }
    }else{
        if(opcao === 1){
            const vetor_todo_ordenado = ordenar_com_quicksort(vetor, {chave: undefined, reverse: true})
           
            mostrar_texto(`Todos os valores do vetor: [${vetor}]`)
            mostrar_texto('')
            mostrar_texto(`Vetor ordenado: [${vetor_todo_ordenado}]`)
        }else if(opcao === 2){
            const pares = filtrar_colecao(vetor, eh_par)
            const pares_ordenados = ordenar_com_quicksort(pares, {chave: undefined, reverse: true})
            
            mostrar_texto(`Todos os valores pares do vetor: [${pares}]`)
            mostrar_texto('')
            mostrar_texto(`Vetor dos valores pares ordenado: [${pares_ordenados}]`)
        }else if(opcao === 3){
            const impares = filtrar_colecao(vetor, eh_impar)
            const impares_ordenados = ordenar_com_quicksort(impares, {chave: undefined, reverse: true})
           
            mostrar_texto(`Todos os valores ímpares do vetor: [${impares}]`)
            mostrar_texto('')
            mostrar_texto(`Vetor dos valores ímpares ordenado: [${impares_ordenados}]`)
        }else if(opcao === 4){
            const positivos = filtrar_numeros_positivos_de_uma_colecao(vetor)
            const positivos_ordenados = ordenar_com_quicksort(positivos, {chave: undefined, reverse: true})
           
            mostrar_texto(`Todos os valores positivos do vetor: [${positivos}]`)
            mostrar_texto('')
            mostrar_texto(`Vetor dos valores positivos ordenado: [${positivos_ordenados}]`)
        }else if(opcao === 5){
            const negativos = filtrar_numeros_negativos_de_uma_colecao(vetor)
            const negativos_ordenados = ordenar_com_quicksort(negativos, {chave: undefined, reverse: true})
            
            mostrar_texto(`Todos os valores negativos do vetor: [${negativos}]`)
            mostrar_texto('')
            mostrar_texto(`Vetor dos valores negativos ordenado: [${negativos_ordenados}]`)
        }else if(opcao === 6){
            ordenar_apenas_os_multiplos_de_n(vetor, false)
        }
    }
}


function menu_de_ordenar(){
    let opcoes_menu = 'Como você deseja ordenar seu vetor?'
    opcoes_menu += '\n1 - Ordenar todos os números do vetor'
    opcoes_menu += '\n2 - Ordenar apenas os números pares do vetor'
    opcoes_menu += '\n3 - Ordenar apenas os números ímpares do vetor'
    opcoes_menu += '\n4 - Ordenar apenas os números positivos do vetor'
    opcoes_menu += '\n5 - Ordenar apenas os números negativos do vetor'
    opcoes_menu += '\n6 - Ordenar apenas os números múltiplos de N'
    opcoes_menu += "\n\n>> "

    return opcoes_menu
}


function ordenar_apenas_os_multiplos_de_n(vetor, crescente = true){
    mostrar_texto('')
    const n = obter_numero('Digite o número que deseja obter os múltiplos:')
    
    mostrar_texto('')
    mostrar_texto('Pressione 1 se deseja obter os múltiplos positivos de N e pressione 2 se deseja obter os múltiplos negativos de N')

    const opcao = obter_opcao_valida()

    if(crescente){
        if(opcao === 1){
            const positivos = filtrar_numeros_positivos_de_uma_colecao(vetor)
            const multiplos_de_n_positivos = filtrar_multiplos_de_n_de_uma_colecao(positivos, n)
            const multiplos_de_n_positivos_ordenados = ordenar_com_quicksort(multiplos_de_n_positivos)
        
            mostrar_texto(`Todos os valores positivos múltiplos de ${n} do vetor: [${multiplos_de_n_positivos}]`)
            mostrar_texto('')
            mostrar_texto(`Vetor dos valores positivos múltiplos de ${n} ordenado: [${multiplos_de_n_positivos_ordenados}]`)
        }else if(opcao === 2){
            const negativos = filtrar_numeros_negativos_de_uma_colecao(vetor)
            const multiplos_de_n_negativos = filtrar_multiplos_de_n_de_uma_colecao(negativos, n)
            const multiplos_de_n_negativos_ordenados = ordenar_com_quicksort(multiplos_de_n_negativos)
        
            mostrar_texto(`Todos os valores negativos múltiplos de ${n} do vetor: [${multiplos_de_n_negativos}]`)
            mostrar_texto('')
            mostrar_texto(`Vetor dos valores negativos múltiplos de ${n} ordenado: [${multiplos_de_n_negativos_ordenados}]`)
    }
    }else{
        if(opcao === 1){
            const positivos = filtrar_numeros_positivos_de_uma_colecao(vetor)
            const multiplos_de_n_positivos = filtrar_multiplos_de_n_de_uma_colecao(positivos, n)
            const multiplos_de_n_positivos_ordenados = ordenar_com_quicksort(multiplos_de_n_positivos, {chave: undefined, reverse: true})
            
            mostrar_texto(`Todos os valores positivos múltiplos de ${n} do vetor: [${multiplos_de_n_positivos}]`)
            mostrar_texto('')
            mostrar_texto(`Vetor dos valores positivos múltiplos de ${n} ordenado: [${multiplos_de_n_positivos_ordenados}]`)
        }else if(opcao === 2){
            const negativos = filtrar_numeros_negativos_de_uma_colecao(vetor)
            const multiplos_de_n_negativos = filtrar_multiplos_de_n_de_uma_colecao(negativos, n)
            const multiplos_de_n_negativos_ordenados = ordenar_com_quicksort(multiplos_de_n_negativos, {chave: undefined, reverse: true})
            
            mostrar_texto(`Todos os valores negativos múltiplos de ${n} do vetor: [${multiplos_de_n_negativos}]`)
            mostrar_texto('')
            mostrar_texto(`Vetor dos valores negativos múltiplos de ${n} ordenado: [${multiplos_de_n_negativos_ordenados}]`)
        }
    }
}


function obter_opcao_valida(label = 'Selecione sua opção:'){
    let numero = obter_numero_positivo(label)

    while(numero > 2){
        mostrar_texto('Favor selecione uma opção válida!!')
        numero = obter_numero_positivo(label)
    }

    return numero
}


function obter_opcao_valida_menu(label = 'Selecione sua opção:'){
    let numero = obter_numero_positivo(label)

    while(numero > 6){
        mostrar_texto('Favor selecione uma opção válida!!')
        numero = obter_numero_positivo(label)
    }

    return numero
}


export function remover_multiplos_de_n_e_m(vetor){
    const n = obter_numero_positivo('Primeiro múltiplo:')
    const m = obter_numero_positivo('Segundo múltiplo:')
    
    mostrar_texto(`Todos os valores do vetor: [${vetor}]`)

    for(let item of vetor){
        if(eh_multiplo_de_n_e_m(item, n, m)){
            vetor = remover_item_da_colecao(vetor, item)
        }
    }

    mostrar_texto('')
    mostrar_texto(`Vetor com  múltiplos de ${n} e ${m} removidos: [${vetor}]`)
}


function eh_multiplo_de_n_e_m(numero, multiplo1, multiplo2){
    const mmc = calcular_mmc(multiplo1, multiplo2)

    if(numero % mmc === 0){
        return true
    }else{
        return false
    }
}


export function bye(){
    const palavras_de_despedida = ['Até mais, Brilho que me ilumina <3', 'Não se desespere, você é capaz de resolver isso! <3', 'Hoje não foi tão bom, mas amanhã será um hoje diferente! <3', 'Perca no hoje, para ganhar no amanhã! <3', 'Continue assim, está fazendo um bom trabalho! <3', 'Volte sempre, já estou com saudades! <3', 'Não desista, criador! Você é incrível! <3']
    const indexes = tamanho_da_colecao(palavras_de_despedida) - 1
    
    const index_aleatorio = obter_numero_aleatorio_na_faixa(indexes, 0)

    mostrar_texto('')
    mostrar_texto(palavras_de_despedida[index_aleatorio])
}


export function gerar_n_grupos_de_t_tamanho(){
    const vetor = gerar_vetor_com_valores_não_repetidos()
    let qtd_de_grupos = obter_numero_positivo(`Deseja obter quantos grupos?`)
    let tamanho_grupo = obter_numero_positivo(`E qual o tamanho de cada grupo?`)    
    let qtd_de_numeros_desejada = qtd_de_grupos * tamanho_grupo

    while(qtd_de_numeros_desejada > tamanho_da_colecao(vetor)){
        mostrar_texto(`Desculpe, a quantidade de números desejada excede a presente no vetor em questão, peça por outros valores!!`)
        qtd_de_grupos = obter_numero_positivo(`Deseja obter quantos grupos?`)
        tamanho_grupo = obter_numero_positivo(`E qual o tamanho de cada grupo?`)    
        qtd_de_numeros_desejada = qtd_de_grupos * tamanho_grupo
    }

    const numeros_para_grupo = sortear_elementos_de_uma_colecao(vetor, qtd_de_numeros_desejada)
    const grupos = obter_grupos(numeros_para_grupo, tamanho_grupo, qtd_de_grupos)
    mostrar_texto(grupos)
}


function obter_grupos(numero, tamanho, qtd_de_grupos){
    let grupos = []
    for(let i = 0; i < qtd_de_grupos; i++){
        const grupo = sortear_elementos_de_uma_colecao(numero, tamanho)
        grupos = meu_push_para_arrays_sem_tamanho_definido(grupos, grupo)
        numero = remover_subvetor_de_uma_colecao(numero, grupo)
    }

    return grupos
}

export function remover_subvetor_de_uma_colecao(vetor, subvetor){
    for(let item of subvetor){
        vetor = remover_item_da_colecao(vetor, item)
    }

    return vetor
}


export function pedir_vetor_e_ver_se_esta_presenta_e_na_ordem(vetor){
    let novo_vetor = gerar_vetor()
    let vetor_preenchido = []

    while(tamanho_da_colecao(novo_vetor) > tamanho_da_colecao(vetor)){
        mostrar_texto('Favor peça um vetor de tamanho menor ou igual ao do vetor primário!!')
        novo_vetor = gerar_vetor()
    }
    
    mostrar_texto("Pressiona 1 se deseja que o vetor seja preenchido automaticamente e 2 se deseja que ele seja preenchido manualmente:")

    const opcao = obter_opcao_valida()

    if(opcao === 1){
        vetor_preenchido = preencher_automaticamente_o_vetor(novo_vetor)
    }else if(opcao === 2){
        vetor_preenchido = preencher_manualmente_o_vetor(novo_vetor)
    }

    mostrar_texto('')
    mostrar_texto(`Coleção: [${vetor}]`)
    mostrar_texto('')
    mostrar_texto(`Subcoleção: [${vetor_preenchido}]`)
    mostrar_texto('')

    if(eh_subcolecao(vetor, vetor_preenchido)){
        mostrar_texto("> Sim, é subcoleção")
    }else{
        mostrar_texto("> Não é subcoleção")
    }
}

