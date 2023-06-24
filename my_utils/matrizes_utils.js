import { gerar_vetor_v1, show_vetor, tamanho_da_colecao } from "./colecoes_utils.js";
import { obter_numero } from "./io_utils.js";

export function gerar_matriz(qtd_de_linhas, qtd_de_colunas, valor_padrao = 0){
    const matriz = gerar_vetor_v1(qtd_de_linhas, valor_padrao)

    for(let i = 0; i < qtd_de_linhas; i++){
        matriz[i] = gerar_vetor_v1(qtd_de_colunas, valor_padrao)
    }

    return matriz
}


export function show_matriz(matriz){
    for (let linha of matriz){
        show_vetor(linha)
    }
}


export function preencher_matriz_manual(matriz){
    const qtd_de_linhas = tamanho_da_colecao(matriz)

    for(let i = 0; i < qtd_de_linhas; i++){
        for(let j = 0; j < tamanho_da_colecao(matriz[i]); j++){
            matriz[i][j] = obter_numero(`[${i}][${j}]:`)
        }
    }
}


export function somar_matrizes(matriz1, matriz2){
    const qtd_de_linhas = tamanho_da_colecao(matriz1)
    const qtd_de_colunas = tamanho_da_colecao(matriz1[0])

    const matriz_soma = gerar_matriz(qtd_de_linhas, qtd_de_linhas, 0)

    for(let i = 0; i < qtd_de_linhas; i++){
        for(let j = 0; j < qtd_de_colunas; j++){
            matriz_soma[i][j] = matriz1[i][j] + matriz2[i][j]
        }
    }

    return matriz_soma
}