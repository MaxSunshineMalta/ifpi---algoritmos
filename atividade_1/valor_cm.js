import { question } from "readline-sync";

//Entrada
const m = Number(question('Distancia:'))

//Processamento
const cm = (m * 100)

//Saída
console.log('Distancia:', cm.toFixed(2), 'cm')