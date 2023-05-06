import { question } from "readline-sync"

//Entrada
const valor_mercadoria = Number(question('Valor:'))

//Processamento
const resto = (valor_mercadoria % 3)
const entrada = (((valor_mercadoria - resto) / 3) + resto)
const prestacoes = ((valor_mercadoria - entrada) / 2)

//Saída
console.log('Entrada:', entrada)
console.log('Prestacoes:', prestacoes)