// export let car1 ={
//     nome: 'carro 1 ',
//     valor: 'R$ 25.000,00',
//     fabricante: 'GM'

// }
let car0 = {
    nome: 'BMW 320i',
    anoTipo: '2015 1.6 TI-Flex Titanium',
    cambioKM: 'Automatico 72.085km',
    preco: 'R$ 35.000,00',
    corte_preco: 'R$ 40.000,00',
    img: './images/bmw20-378.png'
}
let car1 = {
    nome: 'HB20 HYUNDAI',
    anoTipo: '2022/2023 COMFORT 1.0',
    cambioKM: 'Automatico 45.085km',
    preco: 'R$ 70.650,00',
    corte_preco: 'R$ 72.600,00',
    img: "./images/hb20378.png"
}
// ./images/bmw20-378.png
let frame = document.querySelectorAll(".gallery")
// let img = document.querySelectorAll(".gallery img")
// let div = document.querySelectorAll("#desc-car1>p")

let car = "";
console.log(frame[1])
// console.log(img)
// console.log("div: ",div)

for (let i = 0; i < frame.length; i++){
    // console.log(i)
    let img = frame[i].querySelectorAll("img")
    img.forEach(element => {
        if(element.id == 'img-' + "car" + i){
            element.src = eval("car" + i + ".img")
        }
        
    })
    let div = frame[i].querySelectorAll("p")
    div.forEach(element => {
        
        if(element.id == 'car' + i + '-nome'){
        element.innerHTML = "<b>" + eval('car' + i + ".nome") + "</b>"
        }else if(element.id == "car" + i + '-anoTipo'){
            element.innerHTML = eval("car" + i + ".anoTipo")
        }else if(element.id == "car" + i + '-cambioKM'){
            element.innerHTML = eval("car" + i + '.cambioKM')
        }else if(element.id == "car" + i + '-preco'){
            element.innerHTML = eval("car" + i + '.preco')
        }else if(element.id == "car" + i + '-corte-preço'){
            element.innerHTML = eval("car" + i + '.corte_preco')
        } 
    });
    
}

console.log(car)
