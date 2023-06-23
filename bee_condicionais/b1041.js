import { readFileSync } from 'fs';

var input = readFileSync('./input.txt', 'utf8').split('\r\n');
let index = 0

function main(){
    const [x, y] = input[index++].split(' ').map(Number)

    const quadrante = definir_quadrante(x, y)

    mostrar_texto(quadrante)
}


function mostrar_texto(texto){
    return console.log(texto)
}


function definir_quadrante(x, y){
    if(x > 0 && y > 0){
        return 'Q1'
    }else if(x < 0 && y > 0){
        return 'Q2'
    }else if(x < 0 && y < 0){
        return 'Q3'
    }else if(x > 0 && y < 0){
        return 'Q4'
    }else if(x === y && y === 0){
        return 'Origem'
    }else if(x === 0){
        return 'Eixo Y'
    }else if(y === 0){
        return 'Eixo X'
    }
}

main()