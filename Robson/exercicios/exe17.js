//crie um array com alguns numeros 
//abaixo dele, crie uma variavel chamada soma
//e atribua a ela o valor 0
//agora, crie um loop for of paraler este arraye,
//usando a variavel soma, some todos os valores que estao dentro do array.

const numeros = [30,20,10,90,40,50]

let soma = 0

for( numero of numeros ){
soma += numero
}

console.log(soma)

