//arrays

const listaDeCompras = ["batata", "cenoura", "tomate"]

const listaDaloteria = [2, 4, 11, 22, 35, 67]

const listaBolleans = [true, false, false]

const listaVariada = [5, "cinco", false]

console.log(listaDeCompras[2])

console.log(listaVariada[1])

console.log(listaVariada[0] + 1)


//length

console.log(listaBolleans.length)

//includes

const seriesBoas = ["breaking bad", "brooklyn nine - nine"]

seriesBoas.includes("breaking bad")

seriesBoas.includes("brooklyn nine - nine")

console.log(listaDaloteria.includes[4])

// adiciona um elemento
 const numeros =[1, 2, 3]
//console.log(numeros)

numeros.push(4)
console.log(numeros) // [1, 2, 3, 4]

numeros.push(5, 6, 7)
console.log(numeros) //[1, 2, 3, 4, 5, 6, 7]


//pop remove o ultimo elemento

const meusPeixes = ["palhaço", "mandarim", "esturjão"]

meusPeixes.pop()

console.log(meusPeixes) // ["palhaço","mandarim"]

listaDeCompras.pop()
console.log(listaDeCompras)


//splice remove elementos apartir de algum indice.

const letras = ["A", "B", "C", "D", "E", "F", "G", "H"]
//índices (i)    0    1    2    3    4    5    6    7  

letras.splice(2, 1)
//    letras = ["A", "B", "D", "E", "F", "G", "H"]
//índices (i)    0    1    2    3   4    5    6    

letras.splice(3, 2) //letras =["A, "B", "D", "G","H"]
 //indices (i)  =               0   1    2    3   4
listaDaloteria.slice(1,2)

console.log(listaDaloteria)









