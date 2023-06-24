import { question } from "readline-sync"; 

function main(){
    
    let nota1
    let nota2
    let nota3
    let media
    let qtd_ap = 0
    let qtd_rep = 0
    let qtd_tot = 0
    let qtd = 0

    while (matricula !== 0){
        matricula = Number(question('Matrícula:'))
        nota1 = Number(question('Nota 1:'))
        nota2 = Number(question('Nota 2:'))
        nota3 = Number(question('Nota 3:'))
        media = (2 * nota1 + 3 * nota2 + 5 * nota3) / 10
        const situacao = media >= 7 ? 'Aprovado!' : 'Reprovado!'
        console.log(situacao)
        situacao === 'Aprovado!' ? qtd_ap++ : qtd_rep++
        qtd_tot = qtd_ap + qtd_rep
        qtd++
        console.log(`${qtd} - De ${qtd_tot} alunos, existem ${qtd_ap} aprovados e ${qtd_rep} reprovados!!`)
}
}

main()