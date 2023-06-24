import { question } from "readline-sync";

function main(){
    const d = obter_dna_valido()
    const s = obter_código_valido()
    
    const resistencia = verificar_se_eh_resistente(d, s)

}


function verificar_se_eh_resistente(d, s){
    let teste = ''
    for(let i = 0; i < d.length; i++){
        let caractere = d[i]
        
    }
}


function mostrar_texto(texto){
    return console.log(texto)
}


function obter_dna_valido(label = 'Digite o DNA das basctérias:'){
    let dna = question(label)

    while(dna.length < 1){
        mostrar_texto('Favor digite um dna válido!')
        dna = question(label)
    }

    return dna
}


function obter_código_valido(label = 'Digite o código genético:'){
    let codigo = question(label)

    while(codigo.length > 100){
        mostrar_texto('Favor digite um código válido!')
        codigo = question(label)
    }

    return codigo
}

main()