import { question } from "readline-sync";

//Entrada
const latao_kg = Number(question('Peso(Kg):'))

//Processamento
const cobre = (0.7 * latao_kg)
const zinco = (0.3 * latao_kg)

//Saída
console.log('Cobre necessario:', cobre.toFixed(2),'Kg')
console.log('Zinco necessario:', zinco.toFixed(2),'Kg')