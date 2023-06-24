import { question } from "readline-sync";

function main(){
    const duracao_do_curso = Number(question('Duração do curso:'))
    const valor_da_mensalidade_do_curso = Number(question('Valor da mensalidade do curso:'))
    const taxa_selic = Number(question('Taxa SELIC:'))
    const salario_minimo = Number(question('Salário Mínimo:'))
    const renda_familiar = Number(question('Renda Familiar(R$):'))
    const numero_de_pessoas_na_familia = Number(question('Número de pessoas na família:'))
    const ano_de_inicio = Number(question('Ano de início:'))
    const semestre_de_inicio = Number(question('Semestre de início:'))
    const duracao_em_meses = transformar_duracao_para_meses(duracao_do_curso)
    const renda_familiar_em_salario_minimo = calcular_renda_familiar_em_salario_minimo(renda_familiar, salario_minimo)
    const renda_per_capita_em_salario_minimo = calcular_renda_per_capita_em_salario_minimo(renda_familiar_em_salario_minimo, numero_de_pessoas_na_familia)
    const taxa_de_juros = calcular_taxa_de_juros(renda_per_capita_em_salario_minimo,taxa_selic)
    const habilitado = verificar_se_esta_habilitado(renda_per_capita_em_salario_minimo)
    const valor_financiado = calcular_valor_financiado(valor_da_mensalidade_do_curso, duracao_em_meses)
    console.log('Valor financiado:', valor_financiado)
    const valor_total_dos_juros = calcular_valor_total_dos_juros(valor_financiado, taxa_de_juros, duracao_do_curso)
    console.log('Valor total dos juros:', valor_total_dos_juros.toFixed(2))
    const valor_pago_durante_o_curso = calcular_valor_pago_durante_o_curso(duracao_em_meses)
    const valor_da_carencia = calcular_valor_da_carencia()
    console.log(`Valor da carência: ${valor_da_carencia} ; Valor pago durante o curso: ${valor_pago_durante_o_curso}`)
    const total_a_pagar = calcular_total_a_pagar(valor_financiado, valor_total_dos_juros)
    console.log('Valor total a pagar:', total_a_pagar)
    const saldo_devedor = calcular_saldo_devedor(valor_financiado, valor_total_dos_juros, valor_pago_durante_o_curso)
    const valor_da_parcela_apos_carencia = calcular_valor_da_parcela_apos_carencia(saldo_devedor, duracao_em_meses)
    console.log('Valor da parcela após carência:', valor_da_parcela_apos_carencia)
    const renda_minima_ao_iniciar_o_pagamento_do_financiamento = calcular_renda_minima_ao_iniciar_o_pagamento_do_financiamento(valor_da_parcela_apos_carencia)
    const ano_de_inicio_de_pagamento = calcular_ano_de_inicio_de_pagamento (ano_de_inicio, duracao_do_curso, semestre_de_inicio)
    console.log('Ano de início do pagamento:', ano_de_inicio_de_pagamento)
    const semestre_de_inicio_de_pagamento = calcular_semestre_de_inicio_de_pagamento (semestre_de_inicio, duracao_em_meses)
    console.log('Semestre de início de pagamento:', semestre_de_inicio_de_pagamento)
    const ano_de_conclusao_de_pagamento = calcular_ano_de_conclusao_de_pagamento (ano_de_inicio_de_pagamento, duracao_do_curso)
    const semestre_de_conclusao_de_pagamento = calcular_semestre_de_conclusao_de_pagamento (semestre_de_inicio_de_pagamento)
    
}

function transformar_duracao_para_meses(duracao){
    const duracao_em_meses = duracao * 12
    return duracao_em_meses
}

function calcular_valor_pago_durante_o_curso(meses){
    const valor_pago_enquanto_cursa = 150 * (meses / 3)
    return valor_pago_enquanto_cursa
}

function calcular_valor_da_carencia(){
    const valor_da_carencia = 150 * 18
    return valor_da_carencia
}

function calcular_valor_financiado(mensalidade, meses){
    const valor_financiado1 = mensalidade * meses
    return valor_financiado1
}

function calcular_renda_familiar_em_salario_minimo(renda_familiar, sm){
    const renda_familiar_em_salario_minimo = renda_familiar / sm
    return renda_familiar_em_salario_minimo
}

function calcular_renda_per_capita_em_salario_minimo(renda_familiar_em_sm, qtd_pessoas_na_familia){
    const renda_per_capita_sm = renda_familiar_em_sm / qtd_pessoas_na_familia
    return renda_per_capita_sm
}

function verificar_se_esta_habilitado(renda_per_capita_em_salario_minimo){
if((renda_per_capita_em_salario_minimo > 0) && (renda_per_capita_em_salario_minimo <=3)){
   return console.log(`Você está aprovado!!`)
}
else{
    return console.log(`Voce está reprovado!!`)
}
}

function calcular_taxa_de_juros(renda_per_capita_em_salario_minimo, selic){
if((renda_per_capita_em_salario_minimo >= 0) && (renda_per_capita_em_salario_minimo <= 1.5)){
    const taxa_juros = selic * 0.1
    return taxa_juros
}
else if(renda_per_capita_em_salario_minimo <= 2){
    const taxa_juros = selic * 0.15
    return taxa_juros
}
else if(renda_per_capita_em_salario_minimo <= 2.5){
    const taxa_juros = selic * 0.2
    return taxa_juros
}
else if (renda_per_capita_em_salario_minimo <= 3){
    const taxa_juros = selic * 0.25
    return taxa_juros
}
}

function calcular_valor_total_dos_juros(valor_financiado, taxa_de_juros, duracao_do_curso){
    const juros = valor_financiado * taxa_de_juros * duracao_do_curso
    return juros
}

function calcular_saldo_devedor(valor_financiado, juros, valor_pago_durante_o_curso){
    const saldo_devedor1 = valor_financiado + juros - valor_pago_durante_o_curso
    return saldo_devedor1
}

function calcular_total_a_pagar(valor_financiado, valor_total_dos_juros){
    const total = valor_financiado + valor_total_dos_juros 
    return total
}

function calcular_valor_da_parcela_apos_carencia(saldo_devedor, duracao_em_meses){
    const parcela = saldo_devedor / (duracao_em_meses * 4)
    return parcela
}

function calcular_renda_minima_ao_iniciar_o_pagamento_do_financiamento(valor_da_parcela_apos_carencia){
    const renda_minima = valor_da_parcela_apos_carencia * 10
    return console.log('Renda mínima ao iniciar o pagamento do financiamento: ', renda_minima)
}

function calcular_ano_de_inicio_de_pagamento(ano_de_inicio, duracao_do_curso, semestre_de_inicio){
if(semestre_de_inicio === 1){
    const inicio1 = ano_de_inicio + duracao_do_curso + 1.5
    return inicio1
}
else if(semestre_de_inicio === 2){
    const inicio2 = ano_de_inicio + duracao_do_curso + 2
    return inicio2
}
}

function calcular_ano_de_conclusao_de_pagamento(ano_de_inicio_de_pagamento, duracao_do_curso){
    const conclusao = ano_de_inicio_de_pagamento + (4 * duracao_do_curso)
    return console.log('Ano de conclusão do pagamento: ', conclusao)
}

function calcular_semestre_de_inicio_de_pagamento(semestre_de_inicio, duracao_em_meses){
    const semestres = duracao_em_meses / 6
    const carencia = 18 / 6
    const somatorio_de_semestres = semestres + carencia

    if((somatorio_de_semestres % 2 === 1)&& (semestre_de_inicio === 1)){
    const semestre_de_inicio_de_pagamento1 = semestre_de_inicio + 1
    return semestre_de_inicio_de_pagamento1
}
    else if((somatorio_de_semestres % 2 === 1) && (semestre_de_inicio === 2)){
    const semestre_de_inicio_de_pagamento2 = semestre_de_inicio - 1
    return semestre_de_inicio_de_pagamento2
}
    else if(somatorio_de_semestres % 2 === 0){
    const semestre_de_inicio_de_pagamento3 = semestre_de_inicio
    return semestre_de_inicio_de_pagamento3
}
}

function calcular_semestre_de_conclusao_de_pagamento(semestre_de_inicio_de_pagamento){
    const semestre_de_conclusao_de_pagamento = semestre_de_inicio_de_pagamento
    return console.log('Semestre de conclusão de pagamento: ', semestre_de_conclusao_de_pagamento)

}

main()