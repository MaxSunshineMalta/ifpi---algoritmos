import {question} from "readline-sync"

//Entrada
const distancia = Number(question( 'metros:'))
const tempo = Number(question('segundos:'))

//Processamento
const velocidade_ms = (distancia / tempo)
const velocidade_kmh = (velocidade_ms * 3.6)

//Saída
console.log('A velocidade é:', velocidade_kmh.toFixed(2), 'km/h')



