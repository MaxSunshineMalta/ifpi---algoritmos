import { question } from "readline-sync";

function main(){
   console.log('---BOI---')
   let id = Number(question('ID: '))
   let peso 
   let id_menor 
   let id_maior
   let peso_menor = Infinity
   let peso_maior = -Infinity
 
 //primeiro passo = dominar while

// condição de continuidade
   while (id !== 0){
    // Trabalho
      peso = Number(question('Peso (@): '))
    
      if (peso < peso_menor){
         peso_menor = peso
         id_menor = id
     }
     
     if(peso > peso_maior){
         peso_maior = peso
         id_maior = id
     }

    //CD
      id = Number(question('ID:'))
 }

 //Saída 
   console.log(`Menor peso: ID: ${id_menor} - (${peso_menor})@`)
   console.log(`Maior peso: ID: ${id_maior} - (${peso_maior})@`)
   console.log('Parou...')
}

main()