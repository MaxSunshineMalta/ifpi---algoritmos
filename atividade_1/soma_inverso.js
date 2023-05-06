import { question } from "readline-sync";

//Entrada
const valor = Number(question('Valor:'))

//Processamento
const diferenca = (valor % 100)
const quociente = ((valor - diferenca) / 100)
const inverso = ((valor % 10) * 100) + (((valor / 10) % 10) * 10 - (valor % 10)) + (quociente)
const soma = (valor + inverso)

//Saída
console.log('Resultado:', soma.toFixed(2))