import { question } from "readline-sync";

//Entrada
const anos_fumando = Number(question('Anos fumando:'))
const cigarros_dia = Number(question('Cigarros por dia:'))
const preco_carteira = Number(question('Valor da carteira:'))

//Processamento
const dias_fumando = (anos_fumando * 365)
const cigarros_total = (dias_fumando * cigarros_dia)
const numero_carteiras = Math.ceil(cigarros_total / 20)
const preco_total = (numero_carteiras * preco_carteira)

//Saída
console.log('Preco:', preco_total.toFixed(0))