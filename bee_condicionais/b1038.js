import { readFileSync } from 'fs';

var input = readFileSync('./input.txt', 'utf8').split('\r');
let index = 0

function main(){
    const [codigo, quantidade] = input[index++].split(' ').map(Number)

    const total_a_pagar = calcular_total_a_pagar(codigo, quantidade)

    mostrar_texto(`Total: R$ ${total_a_pagar.toFixed(2)}`)
}


function mostrar_texto(texto){
    return console.log(texto)
}


function calcular_total_a_pagar(code, qtd){
    if(code === 1){
        return 4 * qtd
    }else if(code === 2){
        return 4.5 * qtd
    }else if(code === 3){
        return 5 * qtd
    }else if(code === 4){
        return 2 * qtd
    }else if(code === 5){
        return 1.5 * qtd
    }
}

main()