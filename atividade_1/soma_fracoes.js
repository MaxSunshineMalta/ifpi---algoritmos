import { question } from "readline-sync";

//Entrada
const valor1 = Number(question('X1:'))
const valor2 = Number(question('X2:'))
const valor3 = Number(question('X3:'))
const valor4 = Number(question('X4:'))

//Processamento
const soma_cima = (valor4 * valor1 + valor2 * valor3)
const soma_baixo = (valor2 * valor4)

//Saída
console.log('Soma:', soma_cima,' / ', soma_baixo)