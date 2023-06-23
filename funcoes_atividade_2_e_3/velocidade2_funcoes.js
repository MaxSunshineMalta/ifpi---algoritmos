import { question } from "readline-sync";

function main(){
    const distancia = Number(question('quilometros:'))
    const tempo = Number(question('Horas:'))

    const velocidade_kmh = calcular_velocidade_kmh(distancia, tempo)
    const velocidade_ms = calcular_velocidade_ms(velocidade_kmh)

    saida(velocidade_ms)
}

function calcular_velocidade_kmh(distancia, tempo){
    const velocidade_kmh = ( distancia / tempo)
    return velocidade_kmh
}

function calcular_velocidade_ms(velocidade_kmh){
    const velocidade_ms = (velocidade_kmh / 3.6)
    return velocidade_ms
}

function saida(velocidade_ms){
    console.log('A velocidade é:', velocidade_ms.toFixed(2), 'm/s')
}

main()