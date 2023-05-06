import { question } from "readline-sync";

//Entrada
const valor = Number(question('Valor:'))

//Processamento
const segundos = ((valor % 3600) % 60)
const diferenca = (valor % 3600)
const horas = ((valor - diferenca) / 3600)
const minutos = (((valor % 3600) - segundos )/ 60)

//Saída
console.log('Tempo:', horas,'horas,', minutos,'minutos e', segundos,'segundos')
