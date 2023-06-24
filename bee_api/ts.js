function main(){
    const casos_teste = ['esquerda','direita','nenhuma', 'as duas']
  
    for(let i = 0; i < casos_teste.length; i++) {
        const resultado = determinarLinguagemPapagaio(casos_teste[i])
        console.log(resultado)
    }
}

function determinarLinguagemPapagaio(situacao){
    if (situacao === 'esquerda') {
      return 'ingles'
    } else if (situacao === 'direita') {
      return 'frances'
    } else if (situacao === 'nenhuma') {
      return 'portugues'
    } else if (situacao === 'as duas') {
      return 'caiu'
    }
}

main()