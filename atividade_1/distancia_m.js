import { question } from "readline-sync";

//Entrada
const km = Number(question('Distancia:'))

//Processamento
const m = (km * 1000)

//Saída
console.log('Distancia:', m.toFixed(2), 'm')