import {readFileSync} from 'fs'
import { question } from 'readline-sync';

var lines = readFileSync('./input.txt', 'utf8').split('\r\n');
let index = 0

function main(){
    const [num1, num2] = lines[index++].split(' ').map(Number)
    const maior = num1 > num2 ? num1: num2
    const menor = num1 < num2 ? num1: num2
    const multiplos_ou_nao = verificar_se_sao_multiplos(maior, menor)

    mostrar_texto(multiplos_ou_nao)
}


function mostrar_texto(texto){
    return console.log(texto)
}


function obter_numero_inteiro(){
    let numero = Number(question('Digite um número:'))
    let candidato = (numero * 10) % 10
    
    while (candidato !== 0){
        mostrar_texto('Favor digite um número inteiro!')
        numero = Number(question('Digite um número:'))
        candidato = (numero * 10) % 10
    }

    return numero
}


function verificar_se_sao_multiplos(maior, menor){
    if(menor % maior === 0){
        return 'Sao multiplos'
    }else{
        return 'Nao sao multiplos'
    }
}

main()