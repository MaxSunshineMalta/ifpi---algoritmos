import {readFileSync} from 'fs'
var lines = readFileSync('./input.txt', 'utf8').split('\r\n');
let index = 0 

function main(){
    const [a, b, c] = lines[index++].split(' ').map(Number)
    const [x, y, z] = lines[index++].split(' ').map(Number)

    const qtd_de_vezes_de_a_em_x = Math.floor(x / a)
    const qtd_de_vezes_de_b_em_y = Math.floor( y / b)
    const qtd_conteiners_por_andar = qtd_de_vezes_de_a_em_x * qtd_de_vezes_de_b_em_y
    const qtd_de_andares = Math.floor(z / c)
    const total_de_conteiners = qtd_conteiners_por_andar * qtd_de_andares

    mostrar_texto(total_de_conteiners)
}


function mostrar_texto(texto){
    return console.log(texto)
}

main()