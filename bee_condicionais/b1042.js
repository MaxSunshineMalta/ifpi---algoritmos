import { readFileSync } from 'fs';

var input = readFileSync('./input.txt', 'utf8').split('\r\n');
let index = 0

function main(){
    const [num1, num2, num3] = input[index++].split(' ').map(Number)

    const menor_de_todos = definir_menor(num1, num2, num3)
    const valor_do_meio = definir_valor_do_meio(num1, num2, num3)
    const maior_de_todos = definir_maior(num1, num2, num3)

    mostrar_texto(menor_de_todos)
    mostrar_texto(valor_do_meio)
    mostrar_texto(maior_de_todos)
    mostrar_texto('')
    mostrar_texto(num1)
    mostrar_texto(num2)
    mostrar_texto(num3)
}


function mostrar_texto(texto){
    return console.log(texto)
}


function definir_menor(num1, num2, num3){
    if(num1 < num2 && num1 < num3){
        return num1
    }else if(num2 < num1 && num2 < num3){
        return num2
    }else{
        return num3
    }
}


function definir_valor_do_meio(num1, num2, num3){
    if((num2 < num1 && num1 < num3) || (num3 < num1 && num1 < num2)){
        return num1
    }else if((num1 < num2 && num2 < num3) || (num3 < num2 && num2 < num1)){
        return num2
    }else if((num1 < num3 && num3 < num2) || (num2 < num3 && num3 < num1)){
        return num3
    }
}


function definir_maior(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        return num1
    }else if(num2 > num1 && num2 > num3){
        return num2
    }else{
        return num3
    }
}


main()