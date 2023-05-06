import { question } from "readline-sync";

//Entrada
const anos = Number(question('Anos:'))
const meses = Number(question('Meses:'))
const dias = Number(question('Dias:'))

//Processamento
const d_a = (anos * 365)
const d_m = (meses * 30)
const d_t = ( d_a + d_m + dias)

//Saída
console.log(d_t, 'Dias')