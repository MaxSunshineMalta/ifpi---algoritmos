import { question } from "readline-sync";

function main(){
    const pi = 3.14159
    const raio = obter_numero()
    
    const area = pi * Math.pow(raio, 2)

    mostrar_texto(`A=${area.toFixed(4)}`)
}


function obter_numero(){
    return Number(question('Digite o valor do raio:'))
}


function mostrar_texto(valor){
    return console.log(valor)
}

main()