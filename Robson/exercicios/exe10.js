//1. crie um algoritmo que receba 3 números em variáveis e a partir deles
// crie uma estrutura condicional que retorne uma mensagem informando que
// existem dois ou mais números idênticos ou no caso de todos os números serem 
// diferentes retorne uma mensagem informando que não há números idênticos.

const num1 = 4 
const num2 = 8
const num3 = 2

const condicao1 = (num1 === num2) || (num1 === num2) || (num2 === num3)

if (condicao1) {
console.log(`${num1} , ${num2} e ${num3} são idênticos.`)
} else {
    console.log(`${num1} , ${num2} e ${num3} são todos diferentes.`)
}
console.log()
//2. crie um algoritmo que receba uma idade em variavel e apartir dela crie
// uma estrutura condicional que retorne uma mensagem informando se é maior
// ou menor de idade.


const idade1 = 20
const idade2 = 18
const condicao2 = idade1 >= idade2 
if (condicao2){
console.log(` ${idade1} é maior de idade.`)
} else {
console.log(`${idade1} é menor de idade.`)    
}
console.log() 


//3. crie um algoritmo que receba 1 número em uma variável e a partir dele
// crie uma estrutura condicional que retorne uma mensagem informando se ele
// é par ou ímpar.


const num4 = 29

const resto = num4 % 2


const condicao3 = (resto % 0) === 1

if (condicao3) {
console.log(` ${num4} é impar. ` )    
} else {
console.log(` ${num4} é par.` )    
}
