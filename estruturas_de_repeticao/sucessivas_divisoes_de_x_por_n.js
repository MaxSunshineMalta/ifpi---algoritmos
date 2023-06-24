import { question } from "readline-sync";

function main(){
    let x = Number(question('Número X:'))
    let n = Number(question('Número N:'))
    let divisao = x / n
    let quantidade = 0

    //Forma Alternativa
    //while(!(n <= 2)){
    while(n > 2){
        divisao = x / n
        n = n - 1
        x = divisao
        quantidade++
        console.log(`${quantidade} - Valor de X = ${x.toFixed(2)} e Valor de N = ${n}`)
    }

}

main()