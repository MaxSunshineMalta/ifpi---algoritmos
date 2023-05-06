import { question } from "readline-sync";

//Entrada
const dias = Number(question('Dias:'))

//Processamento
const resto1 = (dias % 365)
const resto2 = (resto1 % 30)
const anos = ((dias -resto1) / 365)
const meses = ((resto1 - resto2) / 30)
const dias1 = resto2

//Saída
console.log('Anos:', anos)
console.log('Meses:', meses)
console.log('Dias:', dias1)