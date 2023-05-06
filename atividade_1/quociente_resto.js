import { question } from "readline-sync";

//Entrada
const x1 = Number(question('x1:'))
const x2 = Number(question('x2:'))

//Processamento
const resto_div = (x1 % x2)
const quociente = ((x1 - resto_div) / x2)

//Saída
console.log('O quociente da divisão é:', quociente)
console.log('O resto da divisão é:', resto_div)