import {readFileSync} from 'fs'
var lines = readFileSync('./input.txt', 'utf8').split('\r\n');
let index = 0 

function main(){
    const [a, b, c] = lines[index++].split(' ').map(Number)

    const qtd_de_farinha_de_trigo = Math.floor(a / 2)
    const qtd_de_ovos = Math.floor(b / 3)
    const qtd_de_leite = Math.floor(c / 5)
    const qtd_bolos = calcular_qtd_de_bolos(a, b, c, qtd_de_farinha_de_trigo, qtd_de_ovos, qtd_de_leite)

    mostrar_texto(qtd_bolos)
}


function mostrar_texto(texto){
    return console.log(texto)
}


function calcular_qtd_de_bolos(a, b, c, qtd_de_farinha_de_trigo, qtd_de_ovos, qtd_de_leite){
    if(a < 2 || b < 3 || c < 5){
        return 0
    }else{
        const menor = definir_menor(qtd_de_farinha_de_trigo, qtd_de_ovos, qtd_de_leite)
        return menor
    }
}


function definir_menor(qtd_de_farinha_de_trigo, qtd_de_ovos, qtd_de_leite){
    if(qtd_de_farinha_de_trigo < qtd_de_ovos && qtd_de_farinha_de_trigo < qtd_de_leite){
        return qtd_de_farinha_de_trigo
    }else if(qtd_de_ovos < qtd_de_farinha_de_trigo && qtd_de_ovos < qtd_de_leite){
        return qtd_de_ovos
    }else if(qtd_de_leite < qtd_de_ovos && qtd_de_leite < qtd_de_farinha_de_trigo){
        return qtd_de_leite
    }else if(qtd_de_farinha_de_trigo === qtd_de_ovos && qtd_de_farinha_de_trigo < qtd_de_leite){
        return qtd_de_farinha_de_trigo
    }else if(qtd_de_farinha_de_trigo === qtd_de_leite && qtd_de_farinha_de_trigo < qtd_de_ovos){
        return qtd_de_farinha_de_trigo
    }else if(qtd_de_ovos === qtd_de_leite && qtd_de_ovos < qtd_de_farinha_de_trigo){
        return qtd_de_ovos
    }else if(qtd_de_farinha_de_trigo === qtd_de_ovos && qtd_de_farinha_de_trigo === qtd_de_leite){
        return qtd_de_farinha_de_trigo
    }
}


main()