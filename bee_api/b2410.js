import { question } from "readline-sync";

function main(){
    const qtd_de_registros = obter_qtd_de_registros_valida()

    const registros = obter_registros(qtd_de_registros)
    const total_de_alunos = calcular_total_de_alunos(registros)

   
    

}


function calcular_total_de_alunos(registros){
    let repeticoes = 0
    mostrar_texto(registros)
    for(let item of registros){
       for(let item = item[i]; )
    }

   
    const total_de_alunos = registros.length - registros
    
    return total_de_alunos
}


function mostrar_texto(texto){
    return console.log(texto)
}


function obter_qtd_de_registros_valida(label = 'Digite a quantidade de registros:'){
    let qtd_de_registros = Number(question(label))

    while(qtd_de_registros > Math.pow(10, 5) || qtd_de_registros < 1){
        mostrar_texto('Favor digite um valor válido!')
        qtd_de_registros = Number(question(label))
    }

    return qtd_de_registros
}


function obter_registros(qtd_de_registros){
    let numeros_de_registros = []

    for(let i = 0; i < qtd_de_registros; i++){
        const numero_de_registro = obter_numero_de_registro_valido()
        let insercao = numeros_de_registros.push(numero_de_registro)
    }
    
    return numeros_de_registros
}


function obter_numero_de_registro_valido(label = 'Digite um número de registro:'){
    let numero_de_registro = Number(question(label))

    while(numero_de_registro > Math.pow(10, 6) || numero_de_registro < 0){
        mostrar_texto('Favor digite um valor válido!')
        numero_de_registro = Number(question(label))
    }

    return numero_de_registro
}

main()