import { question } from "readline-sync";

function main(){
    const distancia_prova = Number(question('Distância(M):'))
    const vm_atleta = Number(question('Velocidade Média(Km/H):'))

    const converter_velocidade = calcular_converter_velocidade(vm_atleta)
    const minutos = (distancia_prova / converter_velocidade)

    console.log('Tempo em minutos:', minutos)
}

function calcular_converter_velocidade(vm_atleta){
    const velocidade_convertida = ((vm_atleta * 1000) / 60)
    return velocidade_convertida

}


main()