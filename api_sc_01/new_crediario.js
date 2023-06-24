import { question } from "readline-sync";

function main(){
    const valor_iphone = Number(question('Valor do Iphone:'))
    console.log('Selecione a forma de pagamento:')
    console.log('0 - PIX/Espécie')
    console.log('1 - Cartão de Débito')
    console.log('2 - Entrada + Cartão de Crédito')
    const tipo_de_pagamento = Number(question('Tipo de pagamento:'))
    const valor_a_pagar = calcular_valor_a_pagar(valor_iphone, tipo_de_pagamento)
}

function calcular_valor_a_pagar(valor, meio){
if(meio === 0){
    const desconto_0 = valor * 0.15
    const total_a_pagar_0 = valor - desconto_0
    return console.log(`Você pagará R$:${total_a_pagar_0.toFixed(2)} e economizará R$:${desconto_0.toFixed(2)}`)
}
else if(meio === 1){
    const desconto_1 = valor * 0.1
    const total_a_pagar_1 = valor - desconto_1
    return console.log(`Você pagará R$:${total_a_pagar_1.toFixed(2)} e economizará R$:${desconto_1.toFixed(2)}`)
}
else if(meio === 2){
    console.log('Quanto deseja dar de entrada?:')
    const valor_da_entrada = Number(question('Valor da entrada: R$:'))
    console.log('Em quantas parcelas deseja dividir?')
    const numeros_de_parcelas = Number(question('Quantidade de parcelas:'))
    const valor_em_que_será_aplicado_juros = valor - valor_da_entrada
    const juros = valor_em_que_será_aplicado_juros * 0.0399 + valor_em_que_será_aplicado_juros * 0.015 * numeros_de_parcelas
    const total_a_pagar_2 =  valor + juros
    console.log(`Você pagará R$:${total_a_pagar_2.toFixed(2)}, dessa forma, pagando R$:${juros.toFixed(2)} de juros`)
}
}

main()
