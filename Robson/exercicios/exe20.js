
function imprimeBomDia(nome){
     
    console.log(` 1. Bom dia ${nome}!`)
  }
  imprimeBomDia("Robson")
  console.log()
  
  //crie uma função que receba por parametro nome, sobrenome e idade
  //e imprima no console a mensagem:
  //   `O cliente fulano de tal tem x anos`
  
  function imprimeFrase(nome, sobrenome, idade){
   console.log(`2. O cliente ${nome} ${sobrenome} tem idade de: ${idade}.`)
  }
   
  imprimeFrase("julio","Sesar",22)
  imprimeFrase("Maria","Antônia",37)
  imprimeFrase("Eder","Prestes",40)