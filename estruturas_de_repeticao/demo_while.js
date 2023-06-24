import { question } from "readline-sync";

function main(){
    const nome = String(question(`Qual seu nome?:`))
    const saudacao = realizar_saudacao(nome)
    console.log(`Já que você não me respondeu, vou embora. Astala vista, Baby!`)
}

function realizar_saudacao(nome){
    let atual = 5
    const alvo = 10
    const passo = 1
    while (atual <= alvo){
        console.log(`${atual} - Olá ${nome}, tudo bem?`)
        atual = atual + passo
    }
}

main()