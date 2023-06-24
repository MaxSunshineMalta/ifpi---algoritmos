import {obter_numero_positivo, mostrar_texto, obter_texto} from './my_io_utils.js'

function main(){
    const objetivo = obter_texto('Mariana, qual seu objetivo?')
    const valor_do_objetivo = obter_numero_positivo('E qual o valor disso?')
    const salario = obter_numero_positivo('Qual seu salário?')
    const percentual_do_salario_investido = obter_numero_positivo('Você investirá qual percentual?')
    const taxa_de_juros = obter_numero_positivo('Você usará qual taxa de juros?')
    let tempo_ate_alcancar_o_objetivo = 0
    let saldo = (salario * percentual_do_salario_investido) / 100

    while( saldo <= valor_do_objetivo){
        let juros = saldo * taxa_de_juros / 100
        
        saldo = saldo + juros
        tempo_ate_alcancar_o_objetivo++
        
    }
    
    const qtd_de_anos = calcular_qtd_de_anos(tempo_ate_alcancar_o_objetivo)
    const qtd_de_meses = calcular_qtd_de_meses(tempo_ate_alcancar_o_objetivo)

    mostrar_texto(`O objetivo será alcançado em ${qtd_de_anos}ano(s) e ${qtd_de_meses}mês(es)`)

}


function calcular_qtd_de_anos(tempo){
    return Math.floor(tempo / 12)
}


function calcular_qtd_de_meses(tempo){
    return tempo % 12
}

main()