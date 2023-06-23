import { readFileSync } from 'fs';

var input = readFileSync('./input.txt', 'utf8').split('\r');
let index = 0

function main(){
    let [r1, x1, y1, r2, x2, y2] = input[index++].split(' ').map(Number)

    r1 = r1_valido(r1)
    x1 = x1_valido(x1)
    y1 = y1_valido(y1)
    r2 = r2_valido(r2)
    x2 = x2_valido(x2)
    y2 = y2_valido(y2)

    const distancia_dos_centros = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2)

    const situacao = verificar_situacao(distancia_dos_centros, r1, r2)
        
    mostrar_texto(situacao)
    
}


function mostrar_texto(texto){
    return console.log(texto)
}


function r1_valido(r1){
    if(r1>= 1){
        return r1
    }else{
        return false
    }
}


function x1_valido(x1){
    return Math.abs(x1)
}


function y1_valido(y1){
    return Math.abs(y1)
}


function r2_valido(r2){
    if(r2 <= 1000){
        return r2
    }else{
        return false
    }
}


function x2_valido(x2){
    return Math.abs(x2)
}


function y2_valido(y2){
    if(y2 <= 1000){
        return y2
    }else{
        return false
    }
}


function verificar_situacao(distancia, r1, r2){
    const soma = distancia + r2
    mostrar_texto(soma)
    if(distancia + r2 <= r1){
        return 'RICO'
    }else{
        return 'MORTO'
    }
}

main()