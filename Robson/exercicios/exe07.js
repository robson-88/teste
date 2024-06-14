const num1 = 4
const num2 = 8
const num3 = 6

//1

const condicao1 = (num1 === num2) && (num1 > num3)

console.log(`${num1} é idêntico ao ${num2} e ${num1} é maior que ${num3}? ${condicao1}`)
console.log()

//2

const condicao2 = (num1 !== num2) || (num1 <= num3)

console.log(`${num1} é diferente do ${num2} ou ${num1} é menor igual do que ${num3}? ${condicao2}`)
console.log()

//3
 
const condicao3 = (num3 > num2) && (num3 < num1)

console.log(`${num3} é maior que ${num2}, e ${num3} é menor que ${num1}? ${condicao3}`)

