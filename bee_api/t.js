import { mostrar_texto } from "../io_utils.js";
import {substituir_caractere } from "../strings_utils.js";

function main(){
    const texto = 'João Gabriel Silva Cruz Malta'
    let c = texto === String
    const substituir = substituir_caractere(texto, 'a', 'o', c)
    mostrar_texto(c)
    mostrar_texto(substituir)
}


main()