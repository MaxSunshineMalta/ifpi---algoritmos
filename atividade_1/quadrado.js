import { question } from "readline-sync";

//Entrada
const lado = Number(question('Lado para a área do quadrado que o Iago que:'))

//Processamento
const area = (lado ** 2)

//Saída
console.log('Área:', area.toFixed(2),'u.m')