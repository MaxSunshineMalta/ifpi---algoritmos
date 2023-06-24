import {readFileSync} from 'fs'
var lines = readFileSync('./input.txt', 'utf8').split('\r\n');
let index = 0 

function main(){
    const [numero_de_pessoas, distancia] = lines[index++].split(' ').map(Number)

    const dias_ate_chegar_na_montanha = calcular_qtd_de_dias_ate_chegar_na_montanha(numero_de_pessoas, distancia)

    mostrar_texto(dias_ate_chegar_na_montanha.toFixed(2))
}


function mostrar_texto(texto){
    return console.log(texto)
}


function calcular_qtd_de_dias_ate_chegar_na_montanha(qtd_de_pessoas, distancia){
    return distancia / (qtd_de_pessoas + 2)
}
main()