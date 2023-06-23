import { readFileSync } from 'fs';

var input = readFileSync('./input.txt', 'utf8').split('\r\n');
let index = 0

function main(){
    let [r1, x1, y1, r2, x2, y2] = input[index++].split(' ').map(Number)
    if (valores_validos(r1, x1, y1, r2, x2, y2)){
        const distancia_dos_centros = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2)

        const situacao = verificar_situacao(distancia_dos_centros, r1, r2)

        mostrar_texto(situacao)
    }
}


function mostrar_texto(texto){
    return console.log(texto)
}


function valores_validos(r1, x1, y1, r2, x2, y2){
    return r1>= 1 || Math.abs(x1) || Math.abs(y1) || r2 <= 1000 || Math.abs(x2) || y2 <= 1000
}


function verificar_situacao(distancia, r1, r2){
    if(distancia + r2 <= r1){
        return 'RICO'
    }else{
        return 'MORTO'
    }
}

main()