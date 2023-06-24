import {obter_numero_positivo, mostrar_texto} from './my_io_utils.js'

function main(){
    const largura = obter_numero_positivo('Qual a largura da piscina em centímetros?')
    const comprimento = obter_numero_positivo('Qual o comprimento da piscina em centímetros?')
    const profundidade = obter_numero_positivo('Qual a profundidade da piscina em centímetros?')
    
    const capacidade_maxima = calcular_capacidade_maxima(largura, comprimento, profundidade)
    const capacidade_recomendada = calcular_capacidade_recomendada(capacidade_maxima)

    mostrar_texto(`> A capacidade máxima da piscina é de ${capacidade_maxima.toFixed(2)}L, entretanto o recomendado é que ela seja cheia apenas até ${capacidade_recomendada.toFixed(2)}L, visando a evitar transbordamentos.`)
    
    const valor_a_ser_pago_por_cada_mil_litros = obter_numero_positivo('- Qual o valor a ser pago por cada 1000 litros de água?')
    const gasto_para_encher_a_piscina = calcular_gasto_para_encher_piscina(capacidade_recomendada, valor_a_ser_pago_por_cada_mil_litros)

    mostrar_texto(`> Para encher sua piscina até a capacidade recomendada você gastará R$${gasto_para_encher_a_piscina.toFixed(2)}`)

    const reposicao_de_agua = calcular_qtd_de_agua_a_ser_reposta(capacidade_recomendada)
    const gasto_para_manter_a_agua_no_nivel_ideal = calcular_gasto_para_manter_a_agua_no_nivel_ideal(reposicao_de_agua, valor_a_ser_pago_por_cada_mil_litros)

    mostrar_texto(`> Para manter sua piscina no nível ideal de água você gastará, mensalmente, R$${gasto_para_manter_a_agua_no_nivel_ideal.toFixed(2)}`)
}


function calcular_capacidade_maxima(largura, comprimento, profundidade){
    return (largura * comprimento* profundidade) / 1000
}


function calcular_capacidade_recomendada(capacidade_maxima){
    return capacidade_maxima * 0.85
}

function calcular_gasto_para_encher_piscina(capacidade_recomendada, valor_por_cada_mil_litros){
    if (capacidade_recomendada < 1000){
        return valor_por_cada_mil_litros
    }
    if(capacidade_recomendada % 1000 === 0 ){
        return (capacidade_recomendada * valor_por_cada_mil_litros) / 1000
    }else{
        const valor_a_ser_multiplicado = Math.floor(capacidade_recomendada / 1000) + 1
        const gasto = valor_a_ser_multiplicado * valor_por_cada_mil_litros
        return gasto
    }
}


function calcular_qtd_de_agua_a_ser_reposta(capacidade_recomendada){
    return capacidade_recomendada * 0.1
}


function calcular_gasto_para_manter_a_agua_no_nivel_ideal(reposicao_de_agua, valor_por_cada_mil_litros){
    if (reposicao_de_agua < 1000){
        return valor_por_cada_mil_litros
    }
    if(reposicao_de_agua % 1000 === 0 ){
        return (reposicao_de_agua * valor_por_cada_mil_litros) / 1000
    }else{
        const valor_a_ser_multiplicado = Math.floor(reposicao_de_agua / 1000) + 1
        const gasto = valor_a_ser_multiplicado * valor_por_cada_mil_litros
        return gasto
    }
}

main()