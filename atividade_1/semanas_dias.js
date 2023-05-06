import { question } from "readline-sync";

//Entrada
const dias = Number(question('Dias:'))

//Processamento
const dias_restantes = (dias % 7)
const semanas = ((dias - dias_restantes) / 7)

//Saída
console.log('Tempo:', semanas,'semanas e', dias_restantes,'dias')
