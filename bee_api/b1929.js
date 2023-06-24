import { question } from "readline-sync";
import {readFileSync} from 'fs'
var lines = readFileSync('./input.txt', 'utf8').split('\r\n');
let index = 0 

function main(){
    const [a, b, c, d] = lines[index++].split(' ').map(Number)
    
    if(forma_triangulo1(a,b,c) || forma_triangulo2(a, b, d) || forma_triangulo3(b, c, d)  || forma_triangulo4(a, c, d)){
        mostrar_texto('S')
    }else{
        mostrar_texto('N')
    }
}


function mostrar_texto(texto){
    return console.log(texto)
}


function forma_triangulo1(a, b, c){
    return a + b > c && a + c > b && b + c > a
}


function forma_triangulo2(a, b, d){
    return a + b > d && a + d > b && b + d > a
}


function forma_triangulo3(b, c, d){
    return b + c > d && b + d > c && c + d > b
}


function forma_triangulo4(a, c, d){
    return a + c > d && a + d > c && c + d > a
}

main()