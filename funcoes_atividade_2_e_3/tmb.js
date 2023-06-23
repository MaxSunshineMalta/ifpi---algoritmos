//A taxa metabólica basal é q quantidade de energia que o corpo gasta para realizar suas atividades essenciais, como a respiração e a manutenção da tempratura corpórea.
import { question } from "readline-sync";

function main(){
    const peso = Number(question('Peso(Kg):'))
    const altura = Number(question('Altura(cm):'))
    const idade = Number(question('Idade:'))
    const genero = Number(question('Genero:'))

    const converter_cm = calcular_coverter_cm(altura)
    const tmb_homens = calcular_tmb_homens(peso, altura, idade)
    const tmb_mulheres = calcular_tmb_mulheres(peso, altura, idade)

    console.log('Taxa metabólica basal recomendada para:')
    console.log('Homens:', tmb_homens)
    console.log('Mulheres:', tmb_mulheres)

}

function calcular_coverter_cm(altura){
    const altura_m = (altura / 100)
    return altura_m
}

function calcular_tmb_homens(peso, altura, idade){
    const tmb_em_homens = Math.floor(88.36 + (13.4 * peso) + (4.8 * altura) - (5.7 * idade))
    return tmb_em_homens
}

function calcular_tmb_mulheres(peso, altura, idade){
    const tmb_em_mulheres = Math.floor(447.6 + (9.2 * peso) + (3.1 * altura) - (4.3 * idade))
    return tmb_em_mulheres
}

main()