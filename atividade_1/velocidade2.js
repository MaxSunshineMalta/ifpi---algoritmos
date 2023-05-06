import {question} from "readline-sync"

// Entrada
const distancia = Number(question('quilometros:'))
const tempo = Number(question('Horas:'))

// Processamento
const velocidade_kmh = ( distancia / tempo)
const velocidade_ms = (velocidade_kmh / 3.6)

// Saída
console.log('A velocidade é:', velocidade_ms.toFixed(2), 'm/s')