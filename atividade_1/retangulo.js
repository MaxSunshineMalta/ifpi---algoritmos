import { question } from "readline-sync";

//Entrada
const base = Number(question('Base:'))
const altura = Number(question('Altura:'))

//Processamento
const area = (base * altura)

//Saída
console.log('Área:', area.toFixed(2),'u.m')