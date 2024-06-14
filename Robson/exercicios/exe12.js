//1. crie um array com pelo menos 5 raças de cachorros
//imprima no consolea raça correspondente na tercira 
//posição do array.

const listaDeCaes = ["pastor alemão", "dog alemão", "pintcher", "pastor belga", "dobermann" ] 

//console.log(listaDeCaes[2])

console.log()

//2.para este exercício, comece criando uma array com os 
//valores: 1,2,3,4,5,6. e exiba no terminal quando necessário.
const listaNumerica = [1,2,3,4,5,6]

//1.determine o tamano do array
console.log(`1. o tamanho do array é de ${listaNumerica.length} elementos.`)
console.log()

//2.remova o último elemento do array.
listaNumerica.pop()
console.log(`2. o array sem o ultimo elemento fica:`, listaNumerica)
console.log()

//3.adicione o numero 7.
listaNumerica.push(7)
console.log(`3. o array com o novo elemento fica:`,listaNumerica)
console.log()

//4.verifique se o array possui um elemento com valor 6. 
console.log("4. existe um elemento com valor 6", listaNumerica)
console.log()

//5.remova os números 4 e 5.
listaNumerica.splice(3,2)
console.log(`5. o array sem os elementos removidos fica:`,listaNumerica)
console.log()

//determine o novo tamanho do array.
console.log(`6. o novo tamanho do array é de`,listaNumerica.length)














