import {readFileSync} from 'fs'
var lines = readFileSync('./input.txt', 'utf8').split('\r\n');
let index = 0 

function main(){
    const [l, a, p, r] = lines[index++].split(' ').map(Number)

    const situacao = calcular_situacao(l, a, p, r)

    console.log(situacao)
}

function calcular_situacao(l, a, p, r){
    if (l**2 + a**2 + p**2 <= 4 * r**2){
        return 'S'
    }else{
        return 'N'
    }
}


main()