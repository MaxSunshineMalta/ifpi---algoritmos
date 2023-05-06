import { question } from "readline-sync";

//Entrada
const base = Number(question('Base:'))
const altura = Number(question('Altura:'))

//Processamento
const area = (base * altura / 2)

//Saída
console.log('Área:', area,'u.m')