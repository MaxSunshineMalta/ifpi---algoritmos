import {readFileSync} from 'fs'
var lines = readFileSync('./input.txt', 'utf8').split('\r\n');
let index = 0 

function main(){
    const qtd_de_divisoes = lines[index++].split(' ').map(Number)
    const colecao = lines[index++].split(' ').map(Number)

    let somatorio_dos_pedacos = 0

    for(let item of colecao){
        somatorio_dos_pedacos = somatorio_dos_pedacos + item
    }

    let qtd_pedacos_armazenados = somatorio_dos_pedacos - qtd_de_divisoes

    console.log(qtd_pedacos_armazenados)

}

main()