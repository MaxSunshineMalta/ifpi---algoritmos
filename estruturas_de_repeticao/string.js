import { question } from "readline-sync";

function main(){
    let numeros = [1, 2, 3, 4, 5]
    numeros.push(6, 7, 8, 9, 10)
    numeros.splice(4, 1)

    console.log(numeros)
}

main()