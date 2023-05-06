import { question } from "readline-sync"

// Entrada
const x1 = Number(question('x1:'))
const x2 = Number(question('x2:'))
const x3 = Number(question('x3:'))

//Processamento
const soma = (x1 + x2)
const diferença = (x3 - x2)

//Saída
console.log('Soma:', soma.toFixed(2))
console.log('Diferença:', diferença.toFixed(2))