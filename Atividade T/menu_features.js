import {mostrar_texto, 
        obter_numero_aleatorio_na_faixa,
        obter_numero_positivo } from "../io_utils.js"
import {filtrar_colecao, 
        meu_push_para_arrays_sem_tamanho_definido,
        remover_item_da_colecao,
        sortear_elementos_de_uma_colecao, 
        tamanho_da_colecao } from "./menu_utils.js"

export function obter_nomes(colecao){
    let nomes = []

    while(tamanho_da_colecao(colecao) !== 0){
        nomes = meu_push_para_arrays_sem_tamanho_definido(nomes, colecao[0])
        colecao = remover_item_da_colecao(colecao, colecao[0])
    }

    return nomes
}


export function mostrar_rifa(lista){
    let contador = 1
    for(let item of lista){
        mostrar_texto(`>> ${contador} - ${item}`)
        contador++
    }
}


export function obter_valor_do_ponto(){
    const valor = obter_numero_positivo(`Qual o valor do ponto da Rifa?`)
    mostrar_texto(`Valor do ponto: R$ ${valor.toFixed(2)}`)

    return valor
}


export function obter_valor_da_taxa_de_administracao(){
    const taxa = obter_numero_positivo(`Qual o valor percentual da taxa de administração da Rifa?`)
    mostrar_texto(`Valor da taxa de administração: ${taxa}%`)

    return taxa
}


export function calcular_e_mostrar_valor_arrecadado_valor_da_plataforma_e_valor_liquido(valor_ponto, lista, taxa_administracao){
    if(valor_ponto !== 0 && taxa_administracao !== 0){
    const valor_arrecadado = calcular_valor_arrecadado(valor_ponto, lista)
    const valor_da_plataforma = calcular_valor_da_plataforma(valor_arrecadado, taxa_administracao)
    const valor_liquido = valor_arrecadado - valor_da_plataforma

    mostrar_texto(`Valor Arrecadado: R$ ${valor_arrecadado.toFixed(2)}`)
    mostrar_texto(`Valor da Plataforma: R$ ${valor_da_plataforma.toFixed(2)}`)
    mostrar_texto(`Valor líquido: R$ ${valor_liquido.toFixed(2)}`)
    }else if(valor_ponto === 0 && taxa_administracao !== 0){
        valor_ponto = 2
        const valor_arrecadado = calcular_valor_arrecadado(valor_ponto, lista)
        const valor_da_plataforma = calcular_valor_da_plataforma(valor_arrecadado, taxa_administracao)
        const valor_liquido = valor_arrecadado - valor_da_plataforma

        mostrar_texto(`Valor Arrecadado: R$ ${valor_arrecadado.toFixed(2)}`)
        mostrar_texto(`Valor da Plataforma: R$ ${valor_da_plataforma.toFixed(2)}`)
        mostrar_texto(`Valor líquido: R$ ${valor_liquido.toFixed(2)}`)
    }else if(valor_ponto !== 0 && taxa_administracao === 0){
        taxa_administracao = 10
        const valor_arrecadado = calcular_valor_arrecadado(valor_ponto, lista)
        const valor_da_plataforma = calcular_valor_da_plataforma(valor_arrecadado, taxa_administracao)
        const valor_liquido = valor_arrecadado - valor_da_plataforma

        mostrar_texto(`Valor Arrecadado: R$ ${valor_arrecadado.toFixed(2)}`)
        mostrar_texto(`Valor da Plataforma: R$ ${valor_da_plataforma.toFixed(2)}`)
        mostrar_texto(`Valor líquido: R$ ${valor_liquido.toFixed(2)}`)
    }else if(valor_ponto === 0 && taxa_administracao === 0){
        taxa_administracao = 10
        valor_ponto = 2
        const valor_arrecadado = calcular_valor_arrecadado(valor_ponto, lista)
        const valor_da_plataforma = calcular_valor_da_plataforma(valor_arrecadado, taxa_administracao)
        const valor_liquido = valor_arrecadado - valor_da_plataforma

        mostrar_texto(`Valor Arrecadado: R$ ${valor_arrecadado.toFixed(2)}`)
        mostrar_texto(`Valor da Plataforma: R$ ${valor_da_plataforma.toFixed(2)}`)
        mostrar_texto(`Valor líquido: R$ ${valor_liquido.toFixed(2)}`)
    }
}


export function calcular_valor_arrecadado(valor_ponto, lista){
    const pontos_vendidos = filtrar_colecao(lista, i => i !== '-')

    const qtd_de_pontos_vendidos = tamanho_da_colecao(pontos_vendidos)
    const valor_arrecadado = valor_ponto * qtd_de_pontos_vendidos
    return valor_arrecadado
}


export function calcular_valor_da_plataforma(valor_arrecadado, taxa_administracao){
    return valor_arrecadado * (taxa_administracao / 100)
}


export function obter_qtd_sorteios(lista){
    let qtd_de_sorteios = obter_numero_positivo(`Qual a quantidade de sorteios que acontecerão?`)
    const pontos_vendidos = filtrar_colecao(lista, i => i !== '-')

    const qtd_de_pontos_vendidos = tamanho_da_colecao(pontos_vendidos)

    while(qtd_de_sorteios > qtd_de_pontos_vendidos){
        mostrar_texto(`Favor digite uma quantidade de sorteios menor ou igual a quantidade de pontos vendidos!!`)
        
        qtd_de_sorteios = obter_numero_positivo(`Qual a quantidade de sorteios que acontecerão?`)
    }

    return qtd_de_sorteios
}


export function realizar_sorteios(qtd_de_sorteios, lista, valor_ponto, taxa_administracao){
    if(qtd_de_sorteios === 0){
        qtd_de_sorteios = 1
    }
    
    let numeros_vendidos = []
    let valor_arrecadado, valor_da_plataforma, valor_liquido = 0
    
    if(valor_ponto !== 0 && taxa_administracao !== 0){
        valor_arrecadado = calcular_valor_arrecadado(valor_ponto, lista)
        valor_da_plataforma = calcular_valor_da_plataforma(valor_arrecadado, taxa_administracao)
        valor_liquido = valor_arrecadado - valor_da_plataforma
    
        }else if(valor_ponto === 0 && taxa_administracao !== 0){
            valor_ponto = 2
            valor_arrecadado = calcular_valor_arrecadado(valor_ponto, lista)
            valor_da_plataforma = calcular_valor_da_plataforma(valor_arrecadado, taxa_administracao)
            valor_liquido = valor_arrecadado - valor_da_plataforma
    
        }else if(valor_ponto !== 0 && taxa_administracao === 0){
            taxa_administracao = 10
            valor_arrecadado = calcular_valor_arrecadado(valor_ponto, lista)
            valor_da_plataforma = calcular_valor_da_plataforma(valor_arrecadado, taxa_administracao)
            valor_liquido = valor_arrecadado - valor_da_plataforma
    
        }else if(valor_ponto === 0 && taxa_administracao === 0){
            taxa_administracao = 10
            valor_ponto = 2
            valor_arrecadado = calcular_valor_arrecadado(valor_ponto, lista)
            valor_da_plataforma = calcular_valor_da_plataforma(valor_arrecadado, taxa_administracao)
            valor_liquido = valor_arrecadado - valor_da_plataforma
        }

    for(let i in lista){
        if(lista[i] !== '-'){
            numeros_vendidos = meu_push_para_arrays_sem_tamanho_definido(numeros_vendidos, Number(i) + 1)
        }
    }

    const vencedores_e_quantia = calcular_vencedor_e_quantia(valor_liquido, qtd_de_sorteios, numeros_vendidos, lista)
}


function calcular_vencedor_e_quantia(valor_total, qtd_de_sorteios, numeros_vendidos, lista){
    mostrar_texto(`Pressione 1 se deseja repartir igualmente o valor entre os vencedores e 2 se deseja variar o valor recebido por cada vencedor:`)
    const opcao = obter_opcao_valida_2()

    if(opcao === 1){
        const quantia_de_cada_vencedor = valor_total / qtd_de_sorteios
        
        for(let i = 1; i <= qtd_de_sorteios; i++){
            const vencedor = sortear_elementos_de_uma_colecao(numeros_vendidos)
            numeros_vendidos = remover_item_da_colecao(numeros_vendidos, vencedor)
        
            mostrar_texto(`${i}° número sorteado: ${vencedor} e o Sortudo que receberá R$ ${quantia_de_cada_vencedor.toFixed(2)} foi o participante: ${lista[vencedor - 1]}`)
        }
    }else if(opcao === 2){
        for(let i = 1; i <= qtd_de_sorteios; i++){
            let porcentagem_desse_vencedor
            
            if(i !== qtd_de_sorteios){
                mostrar_texto('')
                porcentagem_desse_vencedor = obter_numero_positivo('Digite o percentual que esse vencedor ganhará:')
            }else{
                porcentagem_desse_vencedor = 100
            }

            const quantia_de_cada_vencedor = valor_total * (porcentagem_desse_vencedor / 100)
            const vencedor = sortear_elementos_de_uma_colecao(numeros_vendidos)
            numeros_vendidos = remover_item_da_colecao(numeros_vendidos, vencedor)
            valor_total = valor_total - quantia_de_cada_vencedor
        
            mostrar_texto('')
            mostrar_texto(`##${i}° número sorteado: ${vencedor} e o Sortudo que receberá R$ ${quantia_de_cada_vencedor.toFixed(2)} foi o participante: ${lista[vencedor - 1]}`)
        
        }
    }
}


function obter_opcao_valida_2(label = 'Selecione sua opção:'){
    let numero = obter_numero_positivo(label)

    while(numero > 5){
        mostrar_texto('Favor selecione uma opção válida!!')
        numero = obter_numero_positivo(label)
    }

    return numero
}


export function mostrar_dados_gerais_da_rifa(lista){
    const menu = menu_opcoes()
    let opcao = obter_opcao_valida(menu)

    if(opcao === 1){
        mostrar_qtd_de_pts_disponiveis(lista)
    }else if(opcao === 2){
        mostrar_qtd_de_pts_vendidos(lista)
    }else if(opcao === 3){
        mostrar_lista_de_pontos_disponiveis(lista)
    }else if(opcao === 4){
        mostrar_lista_de_pontos_vendidos(lista)
    }
}


function obter_opcao_valida(label = 'Selecione sua opção:'){
    let numero = obter_numero_positivo(label)

    while(numero > 5){
        mostrar_texto('Favor selecione uma opção válida!!')
        numero = obter_numero_positivo(label)
    }

    return numero
}


function menu_opcoes(){
    let menu_opcoes = '============= Dados da Rifa ==========='
    menu_opcoes += '\n1 - Mostrar quantidade de pontos disponíveis'
    menu_opcoes += '\n2 - Mostrar quantidade de pontos vendidos'
    menu_opcoes += '\n3 - Mostrar lista de pontos disponíveis'
    menu_opcoes += '\n4 - Mostrar lista de pontos vendidos'
    menu_opcoes += '\n5 - Sair '
    menu_opcoes +='\n>>'
    

    return menu_opcoes
}


function mostrar_qtd_de_pts_disponiveis(nomes){
    const pts_disponiveis = filtrar_colecao(nomes, i => i === '-')
    const qtd_de_pts_disponiveis = tamanho_da_colecao(pts_disponiveis)

    mostrar_texto(`Há ${qtd_de_pts_disponiveis} pontos disponíveis!!`)
}


function mostrar_qtd_de_pts_vendidos(nomes){
    const pts_vendidos = filtrar_colecao(nomes, i => i !== '-')
    const qtd_de_pts_vendidos = tamanho_da_colecao(pts_vendidos)

    mostrar_texto(`Há ${qtd_de_pts_vendidos} pontos vendidos!!`)
}


function mostrar_lista_de_pontos_disponiveis(lista){
    let pontos_disponiveis = []

    for(let i in lista){
        if(lista[i] === '-'){
            pontos_disponiveis = meu_push_para_arrays_sem_tamanho_definido(pontos_disponiveis, Number(i) + 1)
        }
    }

    mostrar_texto('Números disponíveis:')
    
    for(let item of pontos_disponiveis){
        mostrar_texto(item)
    }
}


function mostrar_lista_de_pontos_vendidos(lista){
    let pontos_vendidos = []

    for(let i in lista){
        if(lista[i] !== '-'){
            pontos_vendidos = meu_push_para_arrays_sem_tamanho_definido(pontos_vendidos, Number(i) + 1)
        }
    }

    mostrar_texto('Números vendidos:')
    
    for(let item of pontos_vendidos){
        mostrar_texto(item)
    }
}


export function resetar_valor_do_ponto(valor_do_ponto){
    mostrar_texto(`========== Valor do Ponto Resetado ==========`)
    return valor_do_ponto = 0
}


export function resetar_taxa_de_administracao(taxa_administracao){
    mostrar_texto(`====== Taxa de Administração Resetada =======`)
    return taxa_administracao = 0
}


export function resetar_qtd_de_sorteios(qtd_de_sorteios){
    mostrar_texto(`========== Qtd de Sorteios Resetada =========`)
    mostrar_texto(`============== Rifa Atualizada ==============`)
    return qtd_de_sorteios = 1
}


export function mostrar_valor_do_ponto(valor_do_ponto){
    if(valor_do_ponto === 0){
        valor_do_ponto = 2
    }
    mostrar_texto(`Valor do ponto atual: R$${valor_do_ponto.toFixed(2)}`)
}


export function mostrar_taxa_de_administracao(taxa_administracao){
    if(taxa_administracao === 0){
        taxa_administracao = 10
    }
    mostrar_texto(`Taxa de Administração atual: ${taxa_administracao}%`)
}


export function bye(){
    const palavras_de_despedida = ['Até mais, Brilho que me ilumina <3', 'Não se desespere, você é capaz de resolver isso! <3', 'Hoje não foi tão bom, mas amanhã será um hoje diferente! <3', 'Perca no hoje, para ganhar no amanhã! <3', 'Continue assim, está fazendo um bom trabalho! <3', 'Volte sempre, já estou com saudades! <3', 'Não desista, criador! Você é incrível! <3']
    const indexes = tamanho_da_colecao(palavras_de_despedida) - 1
    
    const index_aleatorio = obter_numero_aleatorio_na_faixa(indexes, 0)

    mostrar_texto('')
    mostrar_texto(palavras_de_despedida[index_aleatorio])
}









