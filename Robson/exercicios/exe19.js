
function bomDia(nome){
 const frase = ` 1. Bom dia ${nome}!`
  return frase
 
}
const fraseBomDia = bomDia ("Robson")
 
console.log(fraseBomDia)

//crie uma função que receba por parametro nome, sobrenome e idade
//e imprima no console a mensagem:
//   `O cliente fulano de tal tem x anos`

function imprimefrase(nome, sobrenome, idade){
 const frase2 = `2. O cliente ${nome} ${sobrenome} tem idade de: ${idade}.`
 return frase2
}
 const frasecliente =imprimefrase("julio","Sesar",22)

console.log(frasecliente)

