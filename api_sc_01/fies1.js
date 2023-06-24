import { question } from "readline-sync";

function main(){
    //Entrada
    const duracao_do_curso_em_anos = Number(question('Duração do curso:'))
    const valor_da_mensalidade_do_curso = Number(question('Valor da mensalidade do curso:'))
    const taxa_selic = Number(question('Taxa SELIC:')) / 100
    const salario_minimo = Number(question('Salário Mínimo:'))
    const renda_familiar = Number(question('Renda Familiar(R$):'))
    const numero_de_pessoas_na_familia = Number(question('Número de pessoas na família:'))
    const ano_de_inicio = Number(question('Ano de início:'))
    const semestre_de_inicio = Number(question('Semestre de início:'))
    const duracao_meses = duracao_do_curso_em_anos * 12
    

    //Processamento
    const apto = verificar_aptidao(renda_familiar, numero_de_pessoas_na_familia, salario_minimo)
    const valor_financiado = calcular_valor_curso(valor_da_mensalidade_do_curso, duracao_do_curso_em_anos)
    const juros_totais = calcular_juros_financiamento(valor_financiado, taxa_selic, renda_familiar, numero_de_pessoas_na_familia, duracao_do_curso_em_anos, salario_minimo)
    const total_a_pagar = valor_financiado + juros_totais
    const taxas_durante_o_curso_e_carencia = calcular_taxa_curso(duracao_meses)
    const valor_parcela = calcular_parcela(total_a_pagar, taxas_durante_o_curso_e_carencia, duracao_meses)
    const renda_minima_do_formado = valor_parcela * 10
    const inicio_pagamento = calcular_inicio_pagamento(duracao_do_curso_em_anos, ano_de_inicio, semestre_de_inicio)
    const final_pagamento = calcular_final_pagamento()

    //Saída
    console.log(`APTO?: ${apto}`)
    console.log(`Valor a ser financiado: R$${valor_financiado.toFixed(2)}`)
    console.log(`Juros do financiamento: R$${juros_totais.toFixed(2)}`)
    console.log(`Total a pagar: R$${total_a_pagar.toFixed(2)}`)
    console.log(`Taxas (R$ 150) Pagas: ${taxas_durante_o_curso.toFixed(2)}`)
    console.log(`Parcelamento: ${duracao_meses * 4} de R$ ${valor_parcela.toFixed(2)}`)
    console.log(`Renda Mínima: R$${renda_minima_do_formado.toFixed(2)}`)
}

main()

//Funções de negócio
function verificar_aptidao(renda_familiar, numero_de_pessoas_na_familia, salario_minimo){
    const renda_por_pessoa = renda_familiar / numero_de_pessoas_na_familia
    return renda_por_pessoa <= (3 * salario_minimo)? 'SIM' : 'NÃO'
}

function calcular_valor_curso(duracao_do_curso, valor_da_mensalidade_do_curso){
    const meses = duracao_do_curso * 12
    const valor = meses * valor_da_mensalidade_do_curso
    return valor
}

function calcular_juros_financiamento(valor_financiado, taxa_selic, renda_familiar, numero_de_pessoas_na_familia, duracao_do_curso, salario_minimo){
    const renda_por_pessoa = renda_familiar / numero_de_pessoas_na_familia
    const taxa = calcular_taxa(renda_por_pessoa, taxa_selic, salario_minimo)
    const juros = valor_financiado * taxa * duracao_do_curso
    return juros
}

function calcular_taxa(renda_por_pessoa, selic, salario_minimo){
    if(renda_por_pessoa <=(1.5 * salario_minimo)){
        return 0.1 * selic 
    }else if(renda_por_pessoa <= (2* salario_minimo)){
        return 0.15 * selic 
    }else if(renda_por_pessoa <= (2.5 * salario_minimo)){
        return 0.2 * selic
    }
    else if(renda_por_pessoa <= (3 * salario_minimo)){
        return 0.25 * selic
    }
}

calcular_taxa_curso(duracao_meses){
    const carencia_meses = 18
    const 
    return 
}

function calcular_parcela(total_a_pagar, taxas_durante_o_curso_e_carencia, duracao_meses){
    const parcela = (total_a_pagar - taxas_durante_o_curso_e_carencia) / (duracao_meses * 4)
    return parcela
}

function calcular_inicio_pagamento(duracao_do_curso_em_anos ,ano_de_inicio, semestre_de_inicio){
    const carencia_ano = 1.5
    let meses_inicio = 0
   

    const ano_inicio = Math.floor(mes_inicio / 12)

    if(semestre_de_inicio === 2){
        
}
}
