import { question } from "readline-sync";

function main(){
    const nota1 = obter_nota_valida()
    const nota2 = obter_nota_valida()
    const nota3 = obter_nota_valida()

    const media = calcular_media(nota1, nota2, nota3)

    mostrar_texto(`MEDIA = ${media.toFixed(1)}`)

}


function mostrar_texto(texto){
    console.log(texto)
}


function obter_nota_valida(){
    let nota = Number(question('Digite o valor da nota:'))

    while (nota < 0 || nota > 10){
        mostrar_texto('Digite uma nota válida!')
        nota = Number(question('Digite o valor da nota:'))

    }

    return nota
}


function calcular_media(n1, n2, n3){
    return (n1 * 2 + n2 * 3 + n3 * 5) / 10
}

main()