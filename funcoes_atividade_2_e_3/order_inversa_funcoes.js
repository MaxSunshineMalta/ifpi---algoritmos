import { question } from "readline-sync";

function main(){
    const valor1 = Number(question('valor1:'))
    const valor2 = Number(question('valor2:'))
    saida(valor1, valor2)
    
}
function saida(valor1, valor2){
    console.log('Ordem inversa:', '(', valor2,',', valor1, ')')
}

main()