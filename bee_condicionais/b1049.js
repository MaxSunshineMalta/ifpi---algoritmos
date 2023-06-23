import { question } from "readline-sync";

function main(){
    const primeira_palavra = palavra_um_valida()
    const segunda_palavra = palavra_dois_valida()
    const terceira_palavra = palavra_tres_valida()

    const classificacao = definir_classificacao(primeira_palavra, segunda_palavra, terceira_palavra)

    mostrar_texto(classificacao)
}


function obter_texto(label = 'Digite uma palavra: '){
    const texto = question(label)

    return texto
}

function mostrar_texto(texto){
    console.log(texto)
}


function palavra_um_valida(label){
    let palavra_um = obter_texto()

    while(palavra_um !== 'vertebrado' && palavra_um !== 'invertebrado'){
        mostrar_texto('Favor digite uma palavra válida!')
        palavra_um = obter_texto()
    }

    return palavra_um
}


function palavra_dois_valida(label){
    let palavra_dois = obter_texto()

    while(palavra_dois !== 'ave' && palavra_dois !== 'mamifero' && palavra_dois !== 'inseto' && palavra_dois !== 'anelideo'){
        mostrar_texto('Favor digite uma palavra válida!')
        palavra_dois = obter_texto()
    }

    return palavra_dois
}


function palavra_tres_valida(label){
    let palavra_tres = obter_texto()

    while(palavra_tres !== 'carnivoro' && palavra_tres !== 'onivoro' && palavra_tres !== 'herbivoro' && palavra_tres !== 'hematofago'){
        mostrar_texto('Favor digite uma palavra válida!')
        palavra_tres = obter_texto()
    }

    return palavra_tres
}



function definir_classificacao(p1, p2, p3){
    if(p1 === 'vertebrado' && p2 === 'ave'){
        return definir_tipo_sendo_vertebrado_e_ave(p3)
    }else if(p1 === 'vertebrado' && p2 === 'mamifero'){
        return definir_tipo_sendo_vertebrado_e_mamifero(p3)
    }else if(p1 === 'invertebrado' && p2 === 'inseto'){
        return definir_tipo_sendo_invertebrado_e_inseto(p3)
    }else if(p1 === 'invertebrado' && p2 === 'anelideo'){
        return definir_tipo_sendo_invertebrado_e_anelideo(p3)
    }
}


function definir_tipo_sendo_vertebrado_e_ave(p3){
    if(p3 === 'carnivoro'){
        return 'aguia'
    }else if(p3 === 'onivoro'){
        return 'pomba'
    }
}


function definir_tipo_sendo_vertebrado_e_mamifero(p3){
    if(p3 === 'onivoro'){
        return 'homem'
    }else if(p3 === 'herbivoro'){
        return 'vaca'
    }
}


function definir_tipo_sendo_invertebrado_e_inseto(p3){
    if(p3 === 'hematofago'){
        return 'pulga'
    }else if(p3 === 'herbivoro'){
        return 'lagarta'
    }
}


function definir_tipo_sendo_invertebrado_e_anelideo(p3){
    if(p3 === 'hematofago'){
        return 'sanguessuga'
    }else if(p3 === 'onivoro'){
        return 'minhoca'
    }
}

main()