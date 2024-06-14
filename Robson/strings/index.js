// template string

const nome = "robson"
const idade = 36
const frase1 = `ola meu nome é ${nome} e tenho ${idade} anos`

console.log(`ola meu nome é ${nome} e tenho ${idade} anos`)
    

//prototipos de strings

//propriedaddes

console.log(nome.length)

const propriedades = nome.length

//metodos

//console.log(nome.toLocaleLowerCase())
//const metodo = nome.toLocaleLowerCase()
//length

console.log(nome.length)
console.log(`A variave nome tem ${nome.length} caracters`)

//tolowercase

console.log(nome.toLocaleLowerCase())

//touppercase
  
const frase2 = "OoIEeeEi"
console.log(frase.toUpperCase())

//trim

const email = "    senac@senac.com        "
email = email.trim()
console.log(email.length)
console.log(email.length)

//includes

const frase3 = "Hoje eu comi batata"
console.log(frase3.includes("batata"))
console.log(frase3.includes("mamão"))

const palavra2 = "mamão"

conste.log(`Na frase a palavra ${palavra2} foi encontrada ? ${frase.includes(palavra2)}`)

//replaceall

const texto = "hoje comi cenoura, adoro cenoura"
 const novoTexto = texto.replaceAll("cenoura","batata" )

 console.log(novoTexto)