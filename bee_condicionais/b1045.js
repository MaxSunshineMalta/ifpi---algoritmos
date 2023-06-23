import {readFileSync} from  'fs'

var lines = readFileSync('./input.txt', 'utf8').split('\r\n')
let index = 0

function main(){
    let [a, b, c] = lines[index++].split(' ').map(Number)

    const menor_de_todos = definir_menor(a, b, c)
    const valor_do_meio = definir_valor_do_meio(a, b, c)
    const maior_de_todos = definir_maior(a, b, c)
    
    a = maior_de_todos
    b = valor_do_meio
    c = menor_de_todos
    
    if(forma_triangulo(a, b, c)){
        const tipo_baseado_em_angulos = verificar_classificacao_em_angulos(a, b, c)
        const tipo_baseado_em_lados = verificar_classificacao_em_lados(a, b, c)
        
        const saida = realizar_saida(tipo_baseado_em_angulos, tipo_baseado_em_lados)
    }else{
        mostrar_texto('NAO FORMA TRIANGULO')
    }
}


function mostrar_texto(texto){
    return console.log(texto)
}


function definir_menor(a, b, c){
    if(a < b && a < c){
        return a
    }else if(b < a && b < c){
        return b
    }else if(c < b && c < a){
        return c
    }else if(a === b && a < c){
        return a
    }else if(a === c && a < b){
        return a
    }else if(b === c && b < a){
        return b
    }else if(a === b && a === c){
        return a
    }
}


function definir_valor_do_meio(a, b, c){
    if((b < a && a < c) || (c < a && a < b)){
        return a
    }else if((a < b && b < c) || (c < b && b < a)){
        return b
    }else if((a < c && c < b) || (b < c && c < a)){
        return c
    }else if((a === b && a < c) ||(a === c && a < b)){
        return a
    }else if((b === c && b < a)){
        return b
    }else if(a === c && a > b){
        return a
    }else if(a === b && a > c){
        return a
    }else if(b === c && b > a){
        return b
    }else if(a === b && a === c){
        return a
    }
}


function definir_maior(a, b, c){
    if(a > b && a > c){
        return a
    }else if(b > a && b > c){
        return b
    }else if(c > a && c > b){
        return c
    }else if(a === b && a > c){
        return a
    }else if(a === c && a > b){
        return a
    }else if(b === c && b > a){
        return b
    }else if(a === b && a === c){
        return a
    }
}


function forma_triangulo(a, b, c){
    return a < b + c
}


function verificar_classificacao_em_angulos(a, b, c){
    if(a ** 2 === b ** 2 + c ** 2){
        return 'TRIANGULO RETANGULO'
    }else if(a ** 2 > b ** 2 + c ** 2){
        return 'TRIANGULO OBTUSANGULO'
    }else if(a ** 2 < b ** 2 + c ** 2){
        return 'TRIANGULO ACUTANGULO'
    }
}


function verificar_classificacao_em_lados(a, b, c){
    if ((a === b ) || (a === c) || (b === c)){
        return 'TRIANGULO ISOSCELES'
    }
    else if(a === b && a === c){
        return 'TRIANGULO EQUILATERO'
    }
}


function realizar_saida(tipo_angulos, tipo_lados){
    if(tipo_angulos === 'TRIANGULO RETANGULO'){
        mostrar_texto(tipo_angulos)
    }else if ( tipo_angulos === 'TRIANGULO OBTUSANGULO' || tipo_angulos === 'TRIANGULO ACUTANGULO'){
        mostrar_texto(tipo_angulos)
        mostrar_texto(tipo_lados)
    }
}


main()