import { mostrar_texto, obter_texto } from './my_io_utils.js'

//Leia uma frase e gere uma nova frase, substituindo o algarismo que aparecer na frase por seu extenso.
function main(){
    const frase = obter_texto('Digite uma frase:')
    
    const nova_frase = substituir_algarismos_por_extenso(frase)

    mostrar_texto(nova_frase)
}


function substituir_algarismos_por_extenso(frase){
    let nova_frase = ''

    for(let i = 0; i < frase.length; i++){
        let caractere = frase[i]
        if (eh_algarismo(caractere)){
            let caractere_extenso = caractere_por_extenso(caractere)
            nova_frase = nova_frase + ' ' + caractere_extenso
        }else{
            nova_frase = nova_frase + caractere
        }
    }

    return nova_frase
}


function eh_algarismo(caractere){
    return caractere === '0'|| caractere === '1'||caractere === '2'||caractere === '3'|| caractere === '4'||caractere === '5'||caractere === '6'||caractere === '7'||caractere=== '8'|| caractere === '9'
}


function caractere_por_extenso(caractere){
    if(caractere === '0'){
        return 'zero'
    }else if(caractere === '1'){
        return 'um'
    }else if(caractere === '2'){
        return 'dois'
    }else if(caractere === '3'){
        return 'tres'
    }else if(caractere === '4'){
        return 'quatro'
    }else if(caractere === '5'){
        return 'cinco'
    }else if(caractere === '6'){
        return 'seis'
    }else if(caractere === '7'){
        return 'sete'
    }else if(caractere === '8'){
        return 'oito'
    }else if(caractere === '9'){
        return 'nove'
    }
}

main()