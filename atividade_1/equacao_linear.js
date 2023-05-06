import { question } from "readline-sync";

//Entrada
const a = Number(question('A:'))
const b = Number(question('B:'))
const c = Number(question('C:'))
const d = Number(question('D:'))
const e = Number(question('E:'))
const f = Number(question('F:'))

//Processamento
const x = ((c * e - b * f) / (a * e - b * d))
const y = ((a * f - c * d) / (a * e - b * d))

//Saída
console.log( 'X:', x.toFixed(2))
console.log('Y:', y.toFixed(2))

