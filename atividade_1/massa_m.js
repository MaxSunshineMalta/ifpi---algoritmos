import { question } from "readline-sync";

//Entrada
const kg = Number(question('Massa(Kg):'))

//Processamento
const g = (kg * 1000)

//Saída
console.log('Massa:', g.toFixed(2), 'g')