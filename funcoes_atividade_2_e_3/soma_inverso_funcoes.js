import { question } from "readline-sync";

function main(){
    const valor = Number(question('Valor:'))
    const unidade = calcular_unidade(valor)
    const inverso = calcular_inverso(valor, unidade)
    const soma = calcular_soma(valor, inverso)
    saida (soma)
}

function calcular_unidade(valor){
    const unidade = Math.floor(valor / 100)
    return unidade
}

function calcular_inverso(valor, unidade){
    const inverso = ((valor % 10) * 100) + (((valor / 10) % 10) * 10 - (valor % 10)) + unidade
    return inverso
}

function calcular_soma(valor, inverso){
    const soma = valor + inverso
    return soma
}

function saida(soma){
    console.log('Resultado:', soma.toFixed(2))
}

main()