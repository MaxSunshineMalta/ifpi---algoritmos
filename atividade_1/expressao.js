import { question } from "readline-sync";

//Entrada
const a = Number(question('A:'))
const b = Number(question('B:'))
const c = Number(question('C:'))

//Processamento
const R = ((a + b) ** 2)
const S = ((b + c) **2)
const D = ((R + S) / 2)

//Saída
console.log('D:', D.toFixed(2))