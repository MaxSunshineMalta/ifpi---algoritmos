import { obter_numero } from '../io_utils.js'
import {preencher_manualmente_o_vetor, 
        gerar_vetor, 
        preencher_automaticamente_o_vetor, 
        contar_os_numeros_positivos_os_negativos_e_os_zeros, 
        somar_todos_os_numeros_todos_os_positivos_e_todos_os_negativos, 
        media_e_mediana_de_todos_os_numeros_dos_numeros_positivos_e_dos_numeros_negativos, 
        maior_e_menor_numero, 
        sortear_um_numero_positivo_e_um_negativo, 
        elevar_vetor_a_n, 
        calcular_n_maiores_valores, 
        calcular_n_menores_valores, 
        listar_media_e_valores_maiores_e_menores_que_a_media, 
        somar_media_dos_numeros_positivos_multiplos_de_2_com_o_produto_acumulado_dos_numeros_negativos_pares_reduzidos_a_metade,
        remover_multiplos_de_n_e_m, 
        bye, 
        ordenar, 
        gerar_n_grupos_de_t_tamanho,
        pedir_vetor_e_ver_se_esta_presenta_e_na_ordem,
        mostrar_vetor} from "./menu_features.js"
import { enter_limpar_menu } from './menu_utils.js'

function main(){
    const opcoes = menu()

    let vetor = []
    let opcao = obter_numero(opcoes)
    
    while (opcao !== 0){
        if(opcao === 1){
            vetor = gerar_vetor()
        }else if(opcao === 2){
            vetor = preencher_manualmente_o_vetor(vetor)
        }else if(opcao === 3){
            vetor = preencher_automaticamente_o_vetor(vetor)
        }else if(opcao === 4){
            mostrar_vetor(vetor)
        }else if(opcao === 5){
            elevar_vetor_a_n(vetor)
        }else if(opcao === 6){
            contar_os_numeros_positivos_os_negativos_e_os_zeros(vetor)
        }else if(opcao === 7){
            somar_todos_os_numeros_todos_os_positivos_e_todos_os_negativos(vetor)
        }else if(opcao === 8){
            media_e_mediana_de_todos_os_numeros_dos_numeros_positivos_e_dos_numeros_negativos(vetor)
        }else if(opcao === 9){
            maior_e_menor_numero(vetor)
        }else if(opcao === 10){
            sortear_um_numero_positivo_e_um_negativo(vetor)
        }else if(opcao === 11){
            gerar_n_grupos_de_t_tamanho()
        }else if(opcao === 12){
            pedir_vetor_e_ver_se_esta_presenta_e_na_ordem(vetor)
        }else if(opcao === 13){
            calcular_n_maiores_valores(vetor)
        }else if(opcao === 14){
            calcular_n_menores_valores(vetor)
        }else if(opcao === 15){
            listar_media_e_valores_maiores_e_menores_que_a_media(vetor)
        }else if(opcao === 16){
            somar_media_dos_numeros_positivos_multiplos_de_2_com_o_produto_acumulado_dos_numeros_negativos_pares_reduzidos_a_metade(vetor)
        }else if(opcao === 17){
            ordenar(vetor, true)
        }else if(opcao == 18){
            ordenar(vetor, false)
        }else if(opcao === 19){
            remover_multiplos_de_n_e_m(vetor)
        }

    enter_limpar_menu()
    opcao = obter_numero(opcoes)
    }

    bye()
}


function menu(){
    let opcoes_menu = '============ M E N U ============='
    opcoes_menu += '\n----------------------------------'
    opcoes_menu += '\n1 - Gerar vetor de N posições'
    opcoes_menu += '\n2 - Preencher vetor manualmente'
    opcoes_menu += '\n3 - Preencher vetor automaticamente'
    opcoes_menu += '\n4 - Mostrar vetor'
    opcoes_menu += '\n5 - Elevar vetor a N'
    opcoes_menu += '\n6 - Contar a quantidade de números positivos, números negativos e zeros no vetor'
    opcoes_menu += '\n7 - Somar todos os números, os números positivos e os números negativos '
    opcoes_menu += '\n8 - Calcular a média e a mediana não só de todos os números, mas também dos números positivos e dos números negativos '
    opcoes_menu += '\n9 - Calcular o maior e o menor número do vetor'
    opcoes_menu += '\n10 - Sortear dois números: Um positivo e um Negativo'
    opcoes_menu += '\n11 - Formar N grupos de tamanho T'
    opcoes_menu += '\n12 - Pedir um novo vetor e verificar se está 100% presente nos números do sistema (e na mesma ordem)'
    opcoes_menu += '\n13 - Top N maiores valores'
    opcoes_menu += '\n14 - Top N menores valores'
    opcoes_menu += '\n15 - Listar média e números maiores e menores que a média'
    opcoes_menu += '\n16 - Somatório da Média dos Números Positivos múltiplos dois com o Produto acumulado dos números negativos pares reduzidos à metade'
    opcoes_menu += '\n17 - Ordenar números de modo crescente'
    opcoes_menu += '\n18 - Ordenar números de modo decrescente'
    opcoes_menu += '\n19 - Eliminar números múltiplos de N e M'
    opcoes_menu += '\n0 - Sair'
    opcoes_menu += "\n\n>> "

    return opcoes_menu
}


main()