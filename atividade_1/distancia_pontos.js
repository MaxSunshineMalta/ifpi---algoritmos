import {question} from "readline-sync";

//Entrada
const x1 = Number(question('x1:'))
const y1 = Number(question('y1:'))
const x2 = Number(question('x2:'))
const y2 = Number(question('y2:'))

//Processamento

const parte1 = (x1 - x2)**2
const parte2 = (y1 - y2)**2
const distancia = Math.sqrt(parte1 + parte2)

//Saída
console.log('A distância é', distancia.toFixed(2))
