import { question } from "readline-sync";

//Entrada
const x1 = Number(question('x1:'))
const x2 = Number(question('x2:'))

//Procesamento
const soma = (x1 + x2)
const diferença = (x1 - x2)
const divisao = (soma / diferença)

//Saída
console.log('Resultado:', divisao.toFixed(2))

