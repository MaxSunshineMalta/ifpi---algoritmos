import { question } from "readline-sync";

function main(){
    const nome = String(question(`Qual seu nome?:`))
    const saudacao = realizar_saudacao(nome)
    console.log(`Já que você não me respondeu, vou embora. Astala vista, Baby!`)
}

function realizar_saudacao(nome){
    let quantidade = 0
    while (quantidade < 10){
        console.log(`${quantidade} - Olá ${nome}, tudo bem?`)
        quantidade = quantidade + 1
    }
}

main()