import { question } from "readline-sync";

//Entrada
const valor1 = Number(question('Valor1:'))
const valor2 = Number(question('Valor2:'))
const valor3 = Number(question('Valor3:'))

//Processamento
const media = ((valor1 + valor2 + valor3) / 3)

//Saída 
console.log('Média:', media)