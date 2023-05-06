import {question} from 'readline-sync'

//Entrada
const horas = Number(question('horas:'))
//Processamento
const minutos = (horas * 60)

//Saída
console.log('Minutos equivalentes:', minutos)
