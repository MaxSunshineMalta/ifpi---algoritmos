import { question } from "readline-sync";

function main(){
    const fahrenheit = Number(question('Temperatura(Fº):'))
    const temperatura_celsius = calcular_temperatura_celsius(fahrenheit)
    
    saida(temperatura_celsius)
}

function calcular_temperatura_celsius(fahrenheit){
    const temperatura_celsius = ((5 * fahrenheit - 160) / 9)
    return temperatura_celsius
}

function saida(temperatura_celsius){
    console.log('Temperatura(Cº):', temperatura_celsius)
}

main()