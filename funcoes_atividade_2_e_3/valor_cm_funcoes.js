import { question } from "readline-sync";

function main(){
    const m = Number(question('Distancia:'))
    const cm = calcular_cm(m)

    saida (cm)
}

function calcular_cm(m){
    const cm = (m * 100)
    return cm
}

function saida(cm){
    console.log('Distancia:', cm.toFixed(2), 'cm')
}

main()