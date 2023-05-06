import {question} from "readline-sync"

//Entrada
const minutos = Number(question('minutos:'))

//Processamento
const horas = Math.floor(minutos / 60)
const minutos_restantes = minutos % 60

//Saída
console.log('Horas:', horas, 'horas')
console.log('Minutos:', minutos_restantes, 'minutos')
console.log('Resultado Final:', horas, 'Horas e', minutos_restantes, 'minutos')
