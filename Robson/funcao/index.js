// função

function imprirOlaMundo(){
console.log("olá mundo!")

}
imprirOlaMundo()

function calcularArea(altura, largura){
    const area = altura * largura
    console.log(area)
}

calcularArea(5,6)
calcularArea(20,60)
calcularArea(1,4)


//escopo

function calcularArea1(altura, largura){
const area = altura *largura
return area
}

function calcularArea1 (altura:Any, largura:any):number 
const arrea = calcularArea1(2,3)



