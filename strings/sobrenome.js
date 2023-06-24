import { mostrar_texto, obter_texto } from './my_io_utils.js'

function main(){
    const nome = obter_texto(`Digite um nome:`)

    const nome_em_array = nome.split(' ')
    const sobrenome_final = obter_sobrenome_final(nome_em_array)
    const primeiro_nome = obter_primeiro_nome(nome_em_array)

    mostrar_texto(`${sobrenome_final}/${primeiro_nome}`)
}


function obter_sobrenome_final(nome){
    return nome[nome.length - 1]
}


function obter_primeiro_nome(nome){
    return nome[0]
}

main()