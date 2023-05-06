import { question } from "readline-sync";

// Entrada
const dolar = Number(question('dolar:'))

// Processamento
const reais = (dolar.toFixed(2) * 5.22)

// Saída
console.log('O equivalente em reais é:', reais.toFixed(2))
