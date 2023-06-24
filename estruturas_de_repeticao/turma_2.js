import { question } from "readline-sync"; 

function main(){
    let matricula = Number(question('Matrícula:'))
    let alunos_aprovados = 0
    let alunos_reprovados = 0

    while (matricula !== 0){
        
        let nota1 = Number(question('Nota 1:'))
        let nota2 = Number(question('Nota 2:'))
        let nota3 = Number(question('Nota 3:'))

        let media = calcular_media(nota1, nota2, nota3)
        let situacao = verificar_situacao(media)
        
        if(situacao === 'Aprovado'){
            alunos_aprovados++
        }else if(situacao === 'Reprovado'){
            alunos_reprovados++
        }

        console.log(`${situacao}!`)

        matricula = Number(question('Matrícula:'))
        
    }

    const total = alunos_aprovados + alunos_reprovados

    console.log(`De ${total} alunos, existem ${alunos_aprovados} aprovados e ${alunos_reprovados} reprovados!!`)
}


function calcular_media(n1, n2, n3){
    const media = (2 * n1 + 3 * n2 + 5 * n3) / 10
    return media
}


function verificar_situacao(media){
    const situacao = media >= 7 ? 'Aprovado' : 'Reprovado'
    return situacao
}


main()