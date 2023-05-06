import { question } from "readline-sync";

//Entrada
const valor = Number(question('Valor:'))

//Processamento
const meses = (valor % 12)
const anos = ((valor - meses) / 12)

//Saída
console.log('Tempo:',anos,'anos e',meses,'meses')