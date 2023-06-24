import { question } from "readline-sync";

function main(){
    const numero = Number(question('Número:'))
    let resultado = numero / 2
    let contador = 1

while (resultado >= 1){
    resultado = resultado / 2
    contador++
}

    console.log(`Último resultado: ${resultado.toFixed(2)}, e foram realizadas ${contador} divisões`)
}

main()