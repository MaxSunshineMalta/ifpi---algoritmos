import { question } from "readline-sync";

//Entrada
const fahrenheit = Number(question('Temperatura(Fº):'))

//Processamento
const celsius = ((5 * fahrenheit - 160) / 9)

//Saída
console.log('Temperatura(Cº):', celsius)