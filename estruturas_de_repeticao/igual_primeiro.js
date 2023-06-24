import { question } from "readline-sync";

function main() {
    const numero_fixo = Number(question('Número:'))
    let numero = Number(question('Número:'))
    while(numero != numero_fixo){
        numero = Number(question('Número:'))
    }
}

main()