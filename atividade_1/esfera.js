import { question } from "readline-sync";

//Entrada
const raio = Number(question('Raio:'))

//Processamento
const volume = ( (4 * 3.14 * raio ** 3) / 3)

//Saída 
console.log('Volume:', volume.toFixed(2), 'u.m')