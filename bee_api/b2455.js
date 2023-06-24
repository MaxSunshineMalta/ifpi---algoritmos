import {readFileSync} from 'fs'
var lines = readFileSync('./input.txt', 'utf8').split('\r\n');
let index = 0 

function main(){
    const [p1, c1, p2, c2] = lines[index++].split(' ').map(Number)

    const situacao = verificar_situacao_da_gangorra(p1, c1, p2, c2)

    mostrar_texto(situacao)
}


function mostrar_texto(texto){
    return console.log(texto)
}


function verificar_situacao_da_gangorra(p1, c1, p2, c2){
    if(p1 * c1 === p2 * c2){
        return '0'
    }else if(p1 * c1 > p2 * c2){
        return '-1'
    }else{
        return '1'
    }
}

main()