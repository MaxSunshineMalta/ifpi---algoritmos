import { question } from "readline-sync";

function main(){
    const nome = String(question(`Qual seu nome?:`))
    const qtd = Number(question('Vezes?'))
    const saudacao = realizar_saudacao(nome, qtd)
    console.log(`Já que você não me respondeu, vou embora. Astala vista, Baby!`)
}

function realizar_saudacao(nome, qtd){

    //Estado inicial; Condição de continuação; Convergência de Dados
    for  (let i = 1; i <= qtd; i++){
        if (i === 101){
            break
        }

        if (i % 2 !== 0){
            continue
        }
        console.log(`${i} - Olá ${nome}, tudo bem?`)
        
    }
}

main()