import {obter_numero_positivo, mostrar_texto, valor_equivalente_a_no_minimo_um_salario_minimo} from './my_io_utils.js'

function main(){
    const renda_mensal = obter_numero_positivo('Qual sua renda mensal?')
    const valor_do_emprestimo = valor_equivalente_a_no_minimo_um_salario_minimo('Qual o valor do empréstimo?')
    const prazos = informar_prazos()
    const prazo_em_meses_valido = obter_prazo_valido() 
    
    const prazo_em_dias = prazo_em_meses_valido * 30
    const valor_do_iof = calcular_iof(valor_do_emprestimo, prazo_em_dias)
    const taxa_de_juros = definir_taxa_de_juros(prazo_em_meses_valido)
    const juros = calcular_juros(valor_do_emprestimo, valor_do_iof, taxa_de_juros, prazo_em_meses_valido)
    const total_a_pagar = valor_do_emprestimo + valor_do_iof + juros
    const valor_da_parcela_mensal = total_a_pagar / prazo_em_meses_valido
    const comprometimento_da_renda_mensal = calcular_comprometimento_da_renda_mensal(valor_da_parcela_mensal, renda_mensal)
    const situacao = verificar_situacao_do_emprestimo(comprometimento_da_renda_mensal)

    mostrar_texto(`==========RELATÓRIO==========
    Valor pedido: R$${valor_do_emprestimo.toFixed(2)}
    Valor do IOF: R$${valor_do_iof.toFixed(2)}
    Valor dos juros a pagar: R$${juros.toFixed(2)}
    Valor total a pagar: R$${total_a_pagar.toFixed(2)}
    Valor da parcela mensal: ${prazo_em_meses_valido}x de R$${valor_da_parcela_mensal.toFixed(2)}
    Comprometimento da renda mensal: ${comprometimento_da_renda_mensal.toFixed(2)}%
    Seu empréstimo foi ${situacao}!
    ============FIM==========`)
    
}


function informar_prazos(){
    mostrar_texto(`============PRAZOS===========
    2x até 6x ---> Taxa de juros equivalente a 50% SELIC
    7x até 12x ---> Taxa de juros equivalente a 75% SELIC
    13x até 18x ---> Taxa de juros equivalente a 100% SELIC
    18x até 24x ---> Taxa de juros equivalente a 130% SELIC`)
}


function obter_prazo_valido(label = 'Qual o prazo escolhido?'){
    let prazo_em_meses = obter_numero_positivo(label)
    
    while ((prazo_em_meses < 2) || (prazo_em_meses > 25)){
        mostrar_texto('Favor digite um prazo válido')
        
        prazo_em_meses = obter_numero_positivo(label)
    }

    return prazo_em_meses
}


function calcular_iof(valor, dias){
    const parte_fixa_do_iof = 0.0038 * valor
    const parte_do_iof_que_depende_do_prazo = 0.000082 * valor * dias
    const iof = parte_do_iof_que_depende_do_prazo + parte_fixa_do_iof
    return iof
}


function definir_taxa_de_juros(prazo){
    const taxa_selic = 0.1375
    if(prazo <= 6){
        const taxa_de_juros = taxa_selic * 0.5
        return taxa_de_juros
    }else if(prazo <= 12){
        const taxa_de_juros = taxa_selic * 0.75
        return taxa_de_juros
    }else if(prazo <= 18){
        const taxa_de_juros = taxa_selic
        return taxa_de_juros
    }else{
        const taxa_de_juros = taxa_selic * 1.3
        return taxa_de_juros
    }
}


function calcular_juros(valor_do_emprestimo, iof, taxa, tempo){
    const capital = valor_do_emprestimo + iof
    const juros = capital * ((1 + taxa) ** tempo - 1)
    return juros
}


function calcular_comprometimento_da_renda_mensal(parcela_mensal, renda_mensal){
    const comprometimento_da_renda_mensal = (parcela_mensal * 100) / renda_mensal
    return comprometimento_da_renda_mensal
}


function verificar_situacao_do_emprestimo(comprometimento_da_renda_mensal){
    if (comprometimento_da_renda_mensal <= 40){
        return 'APROVADO'
    }else{
        return 'NEGADO, uma vez que o valor da parcela ultrapassou 40% do valor da renda mensal'
    }
}

main()