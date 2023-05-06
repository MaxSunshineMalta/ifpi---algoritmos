import { question } from "readline-sync";

//Entrada
const salario_inicial = Number(question('Valor:'))

//Processamento
const aumento = (0.25 * salario_inicial)
const salario_final = (salario_inicial + aumento)

//Saída
console.log('Salário final:', salario_final.toFixed(2))