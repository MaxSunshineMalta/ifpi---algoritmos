import { question } from "readline-sync";

//Entrada
const raio = Number(question('Raio:'))

//Processamento
const comprimento = (2* 3.14 * raio)

//Saída
console.log('Comprimento:', comprimento.toFixed(2), "u.m")