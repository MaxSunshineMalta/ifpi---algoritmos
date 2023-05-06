import { question } from "readline-sync";

//Entrada
const celsius = Number(question('Temperatura(Cº):'))

//Processamento
const fahrenheit = ((9 * celsius + 160) / 5)

//Saída
console.log('Temperatura(Fº):', fahrenheit)
