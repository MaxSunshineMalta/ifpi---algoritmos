import { question } from "readline-sync";

//Entrada
const numero = Number(question('Valor:'))

//Processamento
const resto_div = (numero % 100)
const quociente = ((numero - resto_div) / 100)
const inverso = (((numero % 10) * 100)) + (((numero / 10) % 10) * 10 - (numero % 10)) + (quociente)
const diff = (inverso - numero)

//Saída
console.log('Resultado:', diff.toFixed(2))