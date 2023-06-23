import { readFileSync } from 'fs';
import { question } from 'readline-sync';

var input = readFileSync('./input.txt', 'utf8').split('\r');
let index = 0

function main(){
    const [nota1, nota2, nota3, nota4] = input[index++].split(' ').map(Number)
    

    const media = (nota1 * 2 + nota2 * 3 + nota3 * 4 + nota4 * 1) / 10
    
    mostrar_texto(`Media: ${media.toFixed(1)}`)
    
    const situacao = verificar_situacao(media)

}


function mostrar_texto(texto){
    return console.log(texto)
}


function verificar_situacao(media){
    if (media < 5){
        mostrar_texto('Aluno reprovado.')
    }else if(media < 7){
        mostrar_texto('Aluno em exame.')
       const exame_final = realizar_e_mostrar_dados_sobre_exame(media)
    }else{
        mostrar_texto('Aluno aprovado.')
    }
}


function realizar_e_mostrar_dados_sobre_exame(media){
    const nota_do_exame = Number(question('Digite a nota do exame:'))
    const media_apos_exame = (media + nota_do_exame) / 2
    mostrar_texto(`Nota do exame: ${nota_do_exame.toFixed(1)}`)

    const situacao_apos_exame = verificar_situacao_apos_exame(media_apos_exame)
    
    mostrar_texto(`Media: ${media_apos_exame.toFixed(1)}`)
}


function verificar_situacao_apos_exame(media_apos_exame){
    if(media_apos_exame < 5){
        mostrar_texto('Aluno reprovado.')
    }else{
        mostrar_texto('Aluno aprovado.')
    }
}

main()