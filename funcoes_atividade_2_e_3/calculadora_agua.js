import { question } from "readline-sync";

function main (){
    const peso = Number(question('Peso:'))
    const atividade_fisica_diaria = Number(question('Atividade Física Diária:'))

    const agua_atv_moderada = calcular_agua_atv_moderada(peso)
    const agua_atv_intensa = calcular_agua_atv_intensa(peso)

    console.log('Você deve tomar:', agua_atv_moderada, 'mL de água caso sua atividade física seja moderada')
    console.log('Você deve tomar:', agua_atv_intensa, 'mL de água caso sua atividade física seja intensa')
}

function calcular_agua_atv_moderada(peso){
    const agua_moderada = ( peso * 35)
    return agua_moderada
}

function calcular_agua_atv_intensa(peso){
    const agua_intensa = ( peso * 45)
    return agua_intensa
}

main()
