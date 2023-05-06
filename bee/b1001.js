var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

//import { question } from "readline-sync"

function main(){
    const num1 = obter_numero()
    const num2 = obter_numero()
    
    const soma = num1 + num2

    mostrar_texto(`O resultado da soma é ${soma}`)
}


function obter_numero(){
    return Number(question('Digite um número:'))
}


function mostrar_texto(valor){
    return console.log(valor)
}

main()