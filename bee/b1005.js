import { question } from "readline-sync";

function main(){
    const nota1 = obter_nota_valida()
    const nota2 = obter_nota_valida()

    const media = calcular_media(nota1, nota2)

    mostrar_texto(nota1)
    mostrar_texto(nota2)

    mostrar_texto(`MÉDIA = ${media.toFixed(5)}`)

}


function mostrar_texto(texto){
    console.log(texto)
}


function obter_nota_valida(){
    let nota = Number(question('Digite o valor da nota:'))

    while ((nota < 0 || nota > 10) && (nota_em_decimal(nota) )){
        mostrar_texto('Digite uma nota válida!')
        nota = Number(question('Digite o valor da nota:'))

    }

    return nota
}


function nota_em_decimal(nota){
    return nota 
}


function calcular_media(n1, n2){
    return (n1 * 3.5 + n2 * 7.5) / 11
}

main()