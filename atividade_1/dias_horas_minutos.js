import { question } from "readline-sync";

//Entrada
const valor = Number(question('Valor:'))

//Processamento
const diferenca = (valor % 1440)
const dias = ((valor - diferenca) / 1440)
const minutos = (diferenca % 60)
const horas = ((diferenca - minutos) / 60)

//Saída
console.log('Tempo:',dias,'dias,', horas, 'horas e', minutos,'minutos')