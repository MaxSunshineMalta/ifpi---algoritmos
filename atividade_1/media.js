import { question } from "readline-sync";

//Entrada
const nota1 = Number(question('Nota1:'))
const nota2 = Number(question('Nota2:'))
const nota3 = Number(question('Nota3:'))
const peso1 = Number(question('Peso1:'))
const peso2 = Number(question('Peso2:'))
const peso3 = Number(question('Peso3:'))

//Processamento
const cima = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3)
const baixo = (peso1 + peso2 + peso3)
const media = (cima / baixo)

//Saída
console.log('Nota Final:', media.toFixed(2))