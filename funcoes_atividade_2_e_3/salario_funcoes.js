import { question } from "readline-sync";

function main(){
    const salario_inicial = Number(question('Valor:'))
    const aumento = calcular_aumento(salario_inicial)
    const salario_final = calcular_salario_final(salario_inicial, aumento)
    
    saida(salario_final)
}

function calcular_aumento(salario_inicial){
    const aumento = (0.25 * salario_inicial)
    return aumento
}

function calcular_salario_final(salario_inicial, aumento){
    const salario_final = (salario_inicial + aumento)
    return salario_final
}

function saida(salario_final){
    console.log('Salário final:', salario_final.toFixed(2))
}

main()