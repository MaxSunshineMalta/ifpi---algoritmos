import { question } from "readline-sync";

//Entrada
const quantia_solicitada = Number(question('Quantia:'))

//Processamento
const resto1 = (quantia_solicitada % 200)
const resto2 = (resto1 % 100)
const resto3 = (resto2 % 50)
const resto4 = (resto3 % 20)
const resto5 = (resto4 % 10)
const resto6 = (resto5 % 5)
const resto7 = (resto6 % 2)
const resto8 = (resto7 % 1)
const duzentos = ((quantia_solicitada - resto1) / 200)
const cem = ((resto1 - resto2) / 100)
const cinquenta = ((resto2 - resto3) / 50)
const vinte = ((resto3 - resto4) / 20)
const dez = ((resto4 - resto5) / 10)
const cinco = ((resto5 - resto6) / 5)
const dois = ((resto6 - resto7) / 2)
const um = ((resto7 - resto8) / 1)

//Saída
console.log('Notas 200:', duzentos)
console.log('Notas 100:', cem)
console.log('Notas 50:', cinquenta)
console.log('Notas 20:', vinte)
console.log('Notas  10:', dez)
console.log('Notas 5:', cinco)
console.log('Notas 2:', dois)
console.log('Moedas 1:', um)