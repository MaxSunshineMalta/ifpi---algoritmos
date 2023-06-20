import {readFileSync} from 'fs'
import {enter_limpar_menu} from './menu_utils.js'
import { bye, 
        calcular_e_mostrar_valor_arrecadado_valor_da_plataforma_e_valor_liquido, 
        mostrar_dados_gerais_da_rifa, 
        mostrar_rifa, 
        mostrar_taxa_de_administracao, 
        mostrar_valor_do_ponto, 
        obter_nomes, 
        obter_qtd_sorteios, 
        obter_valor_da_taxa_de_administracao, 
        obter_valor_do_ponto, 
        realizar_sorteios, 
        resetar_qtd_de_sorteios, 
        resetar_taxa_de_administracao, 
        resetar_valor_do_ponto } from './menu_features.js'
import { obter_numero } from '../io_utils.js'

var lines = readFileSync('./lista.txt', 'utf8').split('\r\n')

function main(){
    const menu = menu_opcoes()
    let opcao = obter_numero(menu)
    let lista = obter_nomes(lines)
    let qtd_sorteios = 0
    let valor_do_ponto = 0
    let taxa_administracao = 0

    while(opcao !== 0){
       
        if(opcao === 1){
            valor_do_ponto = obter_valor_do_ponto()
        }else if(opcao === 2){
            taxa_administracao = obter_valor_da_taxa_de_administracao()
        }else if(opcao === 3){
            mostrar_rifa(lista)
        }else if(opcao === 4){
            calcular_e_mostrar_valor_arrecadado_valor_da_plataforma_e_valor_liquido(valor_do_ponto, lista, taxa_administracao)
        }else if(opcao === 5){
            qtd_sorteios = obter_qtd_sorteios(lista)
        }else if(opcao === 6){
            realizar_sorteios(qtd_sorteios, lista, valor_do_ponto, taxa_administracao)
        }else if(opcao === 7){
            mostrar_dados_gerais_da_rifa(lista)
        }else if(opcao === 8){
            valor_do_ponto = resetar_valor_do_ponto(valor_do_ponto)
            taxa_administracao = resetar_taxa_de_administracao(taxa_administracao)
            qtd_sorteios = resetar_qtd_de_sorteios(qtd_sorteios)
        }else if(opcao === 9){
            mostrar_valor_do_ponto(valor_do_ponto)
        }else if(opcao === 10){
            mostrar_taxa_de_administracao(taxa_administracao)
        }

        enter_limpar_menu()
        opcao = obter_numero(menu)
    }

    bye()
}


function menu_opcoes(){
    let menu_opcoes = '============= M E N U ==========='
    menu_opcoes += '\n1 - Definir valor do ponto'
    menu_opcoes += '\n2 - Definir taxa de administração'
    menu_opcoes += '\n3 - Mostrar rifa'
    menu_opcoes += '\n4 - Obter valor arrecadado'
    menu_opcoes += '\n5 - Obter quantidade de sorteios'
    menu_opcoes += '\n6 - Realizar sorteios'
    menu_opcoes += '\n7 - Mostrar dados gerais da rifa'
    menu_opcoes += '\n8 - Resetar rifa'
    menu_opcoes += '\n9 - Mostrar valor do ponto da rifa'
    menu_opcoes += '\n10 - Mostrar taxa de administração'
    menu_opcoes += '\n0 - Sair'
    menu_opcoes +='\n>>'
    

    return menu_opcoes
}

main()