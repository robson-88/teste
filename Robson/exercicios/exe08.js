// 1. crie umalgoritimo que receba 3 números em variáveis e a partir deles crie uma condicional que retorne
// true caso 2 desses números sejam idÊnticos.

const val1 = 1
const val2 = "4"
const val3 = 1

const condicao1 = ( val1 === val3 ) || ( val1 === val2 ) || (val3 === val2)
console.log( `o ${val1} e ${val3} são idênticos ? ${condicao1}` )
console.log()

//2. crie um algoritimo que receba 3 números em variáveis e apertir deles crie uma condicinal que retorne 
//true caso o primeiro número seja o maior dos 3.

const val4 = 50
const val5 = 10
const val6 = 7 

 const condicao2 = ( val4 > val5) && ( val4 > val6 )
console.log(`o ${val4} é o maoir dos 3 números ? ${condicao2}`)
console.log()

//3. crie um algoritimo que receba uma idade uma em valor ea partir deles crie uma condicinal que retorne
//true caso seja maior de idade.
 
let idade1 = 20
const idade2 = 18

const condicao3 = ( idade1 >= idade2 )
console.log(`é maior de idade ? ${condicao3}`)
console.log()
//4. crie um algoritimo que receba 1 número em variáveis e a partir dele crie uma condicional que retorne
//true caso o número seja par. 

const num1 = 24
const resto = num1 % 2

const condicao4 = ( resto === 0 ) 
console.log( `O número é par ? ${condicao4}` )