import { readFileSync } from 'fs';

var input = readFileSync('./input.txt', 'utf8').split('\r\n');
let index = 0



function main(){

    const [codigo_p1, qtd_p1, preco_p1] = input[0].split(' ').map(Number)
    const [codigo_2, qtd_p2, preco_p2] = input[1].split(' ').map(Number)

    const preco_total_produto_um = qtd_p1 * preco_p1
    const preco_total_produto_dois = qtd_p2 * preco_p2
    const total_a_pagar = preco_total_produto_um + preco_total_produto_dois

    mostrar_texto(`VALOR A PAGAR: R$ ${total_a_pagar.toFixed(2)}`)
}


function mostrar_texto(texto){
    return console.log(texto)
}


main()