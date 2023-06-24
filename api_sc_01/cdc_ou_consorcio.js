import { question } from "readline-sync";

function main(){
    const percentual_da_fipe = Number(question('Percentual da fipe que vai vender o carro:'))
    const qtd_de_meses_para_parcelar = Number(question('Quantidade de meses que deseja parcelar:'))
    const taxa_de_juros = Number(question('Taxa de juros:'))
    const taxa_de_administracao = Number(question('Taxa Administração Consórcio:'))
    const valor_do_percentual = calcular_valor_do_percentual(percentual_da_fipe)
    console.log('========CDC========')
    const valor_do_bem_cdc = calcular_valor_do_bem_cdc()
    const valor_a_ser_parcelado_cdc = calcular_valor_a_ser_parcelado_cdc(valor_do_percentual)
    console.log(`Valor a ser parcelado (CDC): ${valor_a_ser_parcelado_cdc}`)
    const juros_totais_cdc = calcular_juros_totais_cdc(valor_a_ser_parcelado_cdc, taxa_de_juros, qtd_de_meses_para_parcelar)
    console.log(`Juros Totais (CDC): ${juros_totais_cdc}`)
    const valor_das_prestacoes_cdc = calcular_valor_das_prestacoes_cdc(valor_a_ser_parcelado_cdc, juros_totais_cdc, qtd_de_meses_para_parcelar)
    console.log(`Valor das prestações (CDC): ${valor_das_prestacoes_cdc.toFixed(2)}`)
    const total_a_pagar_cdc = calcular_total_a_pagar_cdc(valor_do_percentual, valor_das_prestacoes_cdc, qtd_de_meses_para_parcelar)
    console.log(`Total a pagar (CDC): ${total_a_pagar_cdc}`)
    console.log('======CONSÓRCIO=====')
    const valor_bem_consorcio = calcular_valor_do_bem_consorcio()
    console.log(`Valor do bem (consórcio): ${valor_bem_consorcio}`)
    const valor_a_ser_parcelado_consorcio = calcular_valor_a_ser_parcelado_consorcio(valor_do_percentual)
    console.log(`Valor a ser parcelado (consórcio): ${valor_a_ser_parcelado_consorcio}`)
    const juros_totais_consorcio = calcular_juros_totais_consorcio(valor_bem_consorcio, taxa_de_administracao)
    console.log(`Juros Totais (consórcio): ${juros_totais_consorcio}`)
    const valor_das_prestacoes_consorcio = calcular_valor_das_prestacoes_consorcio(valor_a_ser_parcelado_consorcio, juros_totais_consorcio, qtd_de_meses_para_parcelar)
    console.log(`Valor das prestações (consórcio): ${valor_das_prestacoes_consorcio.toFixed(2)}`)
    const total_a_pagar_consorcio = calcular_total_a_pagar_consorcio(valor_do_percentual, valor_das_prestacoes_consorcio, qtd_de_meses_para_parcelar)
    console.log(`Total a pagar (consórcio): ${total_a_pagar_consorcio}`)
    const mais_vantajoso = verificar_qual_mais_vantajoso(total_a_pagar_cdc, total_a_pagar_consorcio)
}

function calcular_valor_do_percentual(percentual){
    const valor = (89000 * percentual) / 100
    return valor
}

function calcular_valor_do_bem_cdc(){
    const valor_bem_cdc = 185000
    return console.log(`Valor do bem (CDC): ${valor_bem_cdc}`)
}

function calcular_valor_a_ser_parcelado_cdc(valor_do_percentual){
    const valor_a_ser_parcelado_cdc = 185000 - valor_do_percentual
    return valor_a_ser_parcelado_cdc
}

function calcular_juros_totais_cdc(capital, taxa, tempo){
    const juros_cdc = capital * (taxa / 100) * tempo
    return juros_cdc
}

function calcular_valor_das_prestacoes_cdc(valor_a_ser_parcelado_cdc, juros_cdc, meses){
    const valor_das_prestacoes_cdc = (valor_a_ser_parcelado_cdc + juros_cdc) / meses
    return valor_das_prestacoes_cdc
}

function calcular_total_a_pagar_cdc(valor_do_percentual ,valor_das_prestacoes_cdc, meses){
    const total_a_pagar_cdc = valor_do_percentual + (valor_das_prestacoes_cdc * meses)
    return total_a_pagar_cdc
}

function calcular_valor_do_bem_consorcio(){
    const valor_bem_consorcio = 185000
    return valor_bem_consorcio
}

function calcular_valor_a_ser_parcelado_consorcio(valor_do_percentual){
    const valor_a_ser_parcelado_consorcio = 185000 - valor_do_percentual
    return valor_a_ser_parcelado_consorcio
}

function calcular_juros_totais_consorcio(valor_bem_consorcio, taxa_de_administracao){
    const valor_da_taxa_adm = valor_bem_consorcio * (taxa_de_administracao / 100)
    return valor_da_taxa_adm
}

function calcular_valor_das_prestacoes_consorcio(valor_a_ser_parcelado_consorcio, juros_consorcio, meses){
    const prestacoes_consorcio = (valor_a_ser_parcelado_consorcio + juros_consorcio) / meses
    return prestacoes_consorcio
}

function calcular_total_a_pagar_consorcio(valor_do_percentual, prestacoes_consorcio, meses){
    const total_a_pagar_consorcio = valor_do_percentual + (prestacoes_consorcio * meses)
    return total_a_pagar_consorcio
}

function verificar_qual_mais_vantajoso(total_cdc, total_consorcio){
if(total_cdc > total_consorcio){
    return console.log(`A opção consórcio é mais vantajosa`)
}
else if(total_cdc < total_consorcio){
    return console.log(`A opção cdc é mais vantajosa`)
}
else if(total_cdc === total_consorcio){
    return console.log(`As opções apresentam o mesmo valor`)
}
}

main()

