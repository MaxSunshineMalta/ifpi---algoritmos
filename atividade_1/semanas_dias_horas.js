import { question } from "readline-sync";

//Entrada
const valor = Number(question('Valor:'))

//Processamento
const diferenca = (valor % 168)
const semanas = ((valor- diferenca) / 168)
const horas = (diferenca % 24)
const dias = ((diferenca - horas) / 24)


//Saída
console.log('Tempo:', semanas,'semanas,',dias,'dias e',horas,'horas')