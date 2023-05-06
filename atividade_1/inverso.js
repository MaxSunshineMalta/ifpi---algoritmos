import { question } from "readline-sync";

//Entrada
const numero = Number(question('numero:'))

//Processamento
const resto_div = (numero % 100)
const quociente = ((numero - resto_div) / 100)
const inverso = (((numero % 10) * 100)) + (((numero / 10) % 10) * 10 - (numero % 10)) + (quociente)

//Saída
console.log('Inverso:', inverso.toFixed(2))