import { question } from "readline-sync";

function main(){
    const x1 = Number(question('x1:'))
    const y1 = Number(question('y1:'))
    const x2 = Number(question('x2:'))
    const y2 = Number(question('y2:'))

    const parte1 = calcular_parte1(x1, x2)
    const parte2 = calcular_parte2(y1, y2)
    const distancia_pontos = calcular_distancia_pontos(parte1, parte2)

    saida(distancia_pontos)
}

function calcular_parte1(x1, x2){
    const parte1 = (x1 - x2)**2
    return parte1
}

function calcular_parte2(y1, y2){
    const parte2 = (y1 - y2)**2
    return parte2
}

function calcular_distancia_pontos(parte1, parte2){
   const distancia_pontos = Math.sqrt(parte1 + parte2)
    return distancia_pontos
}

function saida(distancia_pontos){
    console.log('A distância é', distancia_pontos.toFixed(2))
}

main()