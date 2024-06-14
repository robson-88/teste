//o nome da pessoa é       e suas comidas sao     ,     e      .seu melhor amigose chama    e tem   anos. 

let a = {
nome: `Davi`,
comida: [`pizza`,`xis`,`batata frita`],
amigo: `Éder`,
idade: 30,
}
console.log(`O nome da pessoa é ${a.nome} e suas comidas favoritas são ${a.comida[0]},${a.comida[1]} e ${a.comida[2]}.Seu melhor amigo se chama ${a.amigo} e tem ${a.idade} anos. `)

function novaPessoa(a){
    let pessoa = {
        ...a,
comida : [`pizza`,`xis`,`batata frita`],
amigo: {nome:`Éder`,
idade: 30,}
}
}
            



