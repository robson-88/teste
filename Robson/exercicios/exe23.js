//1.crie um objeto que represente um filme.ele deve ter dados da direção
//nome, o ano de lancamento, uma lista com o elenco e uma propriedade se ja viu ou não.
//acesse e imprima no console cada uma das prioridades; metade usando notaçao do ponto e a outra metade com notaçao de colchetes.


const filme = {
nome: `terremoto`,
ano:`10/ 03/ 1980`,
elenco: [`Diego Dias`,`toni Silva`,`Maria Cardoso`],
jaViu: true

}
console.log(filme.nome)
console.log(filme.ano)
console.log(filme[`elenco`])
console.log(filme[`jaViu`])
console.log()


//Crie um objeto que represente uma pessoa.essa pessoa
//precisa ter nome, idade, genero musicalpreferido.
//acesse e imprima no console as prioridades desse objeto, seguindo o modelo abaixo:
//``O nomeda pessoa é       , elatem      anos e gosta muito de     .

let pessoa = {
nome2:`tiago`,
idade:30,
musica:`pagode`,

}
console.log(`o nome da pessoa é ${pessoa.nome2},ele tem ${pessoa.idade} anos e gosta muito de ${pessoa.musica} `)
console.log()
///ex3.adicione ao objeto do exercicio 1 lista com os nomes
//dos personagens do filme.
//acesse e imprima no console cada pessoa do elenco junto com seu respectivo personagem
//alterr a primeira pessoa do elenco por `xuxa
//imprima no console todas as prioridades.


let filme2 = {
lista:[`Gstavo` ,`Davi`,`Andreia`],
g:`cachorro`,
d:`policial`,
a:`carteira`,
}



console.log(filme2.lista[0] = g)
console.log(filme2.lista[1] = d)
console.log(filme2.lista[2] = a)




