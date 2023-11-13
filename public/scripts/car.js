var carro = ''

function cardetails(car){
    
    sessionStorage.setItem('carro', car)
    
    window.open('veiculoSelecionado.html', '_self')

}
let estoque = [
    {
        nome: 'BMW 320i',
        anoTipo: '2015 1.6 TI-Flex Titanium',
        cambioKM: 'Automatico 72.085km',
        preco: 'R$ 35.000,00',
        corte_preco: 'R$ 40.000,00',
        img: './images/bmw20-378.png'
    },
    {
        nome: 'HB20 HYUNDAI',
        anoTipo: '2022/2023 COMFORT 1.0',
        cambioKM: 'Automatico 45.085km',
        preco: 'R$ 70.650,00',
        corte_preco: 'R$ 72.600,00',
        img: "./images/hb20378.png"
    },
    {
        nome: 'Ford FIESTA',
        anoTipo: '2015 1.6 TI-Flex TITANIUM',
        cambioKM: 'Automatico 72.085km',
        preco: 'R$ 35.000,00',
        corte_preco: 'R$ 40.000,00',
        img: "./images/destaques/fiesta378x278.png"
    },
    {
        nome: 'GM PRISMA',
        anoTipo: '2015 1.6 TI-Flex TITANIUM',
        cambioKM: 'Automatico 72.085km',
        preco: 'R$ 75.000,00',
        corte_preco: 'R$ 78.000,00',
        img: './images/gm378.png'
    },
    {
        nome: 'Ford FIESTA',
        anoTipo: '2015 1.6 TI-Flex TITANIUM',
        cambioKM: 'Automatico 72.085km',
        preco: 'R$ 35.000,00',
        corte_preco: 'R$ 40.000,00',
        img: "./images/destaques/fiesta378x278.png"
    },
    {
        nome: 'Ford FIESTA',
        anoTipo: '2015 1.6 TI-Flex TITANIUM',
        cambioKM: 'Automatico 72.085km',
        preco: 'R$ 35.000,00',
        corte_preco: 'R$ 40.000,00',
        img: "./images/bmw20-378.png"
    },
    {
        nome: 'Ford FIESTA',
        anoTipo: '2015 1.6 TI-Flex TITANIUM',
        cambioKM: 'Automatico 72.085km',
        preco: 'R$ 35.000,00',
        corte_preco: 'R$ 40.000,00',
        img: "./images/destaques/fiesta378x278.png"
    },
    {
        nome: 'HB20 HYUNDAI',
        anoTipo: '2015 1.6 TI-Flex TITANIUM',
        cambioKM: 'Automatico 72.085km',
        preco: 'R$ 35.000,00',
        corte_preco: 'R$ 40.000,00',
        img: "./images/hb20378.png"
    },
    {
        nome: 'GM PRISMA',
        anoTipo: '2015 1.6 TI-Flex TITANIUM',
        cambioKM: 'Automatico 72.085km',
        preco: 'R$ 35.000,00',
        corte_preco: 'R$ 40.000,00',
        img: "./images/gm378.png"
    },
    {
        nome: 'Ford FIESTA',
        anoTipo: '2015 1.6 TI-Flex TITANIUM',
        cambioKM: 'Automatico 72.085km',
        preco: 'R$ 35.000,00',
        corte_preco: 'R$ 40.000,00',
        img: "./images/destaques/fiesta378x278.png"
    },
    {
        nome: 'BMW 320i',
        anoTipo: '2015 1.6 TI-Flex',
        cambioKM: 'Automatico 72.085km',
        preco: 'R$ 135.000,00',
        corte_preco: 'R$ 140.000,00',
        img: "./images/bmw20-378.png"
    },
    {
        nome: 'HB20 HYUNDAI',
        anoTipo: '2015 1.6 TI-Flex',
        cambioKM: 'Automatico 72.085km',
        preco: 'R$ 65.000,00',
        corte_preco: 'R$ 74.000,00',
        img: "./images/hb20378.png"
    }
]


let divDinamic = document.getElementById("grade-veiculos")
// let descript = document.createElement("div")

for (let i = 0; i < estoque.length; i++){
    let divFrame = document.createElement("div")
    divFrame.setAttribute("class", "gallery")
    divFrame.setAttribute("id", "frame-" + i)
    divFrame.setAttribute("onclick", "cardetails('car-" + i + "')")

    let img = document.createElement("img")
    img.setAttribute("id", "img-car" + i)
    img.setAttribute("src", estoque[i].img)

    let descript = document.createElement("div")
    descript.setAttribute("id", "desc-car" + i)
    descript.setAttribute("class", "descrip")

    let divPnome = document.createElement("p")
    divPnome.setAttribute("id", "car" + i + "-nome")
    divPnome.innerHTML = "<b>" + estoque[i].nome + "</b>"

    let divPano = document.createElement("p")
    divPano.setAttribute("id", "car" + i + "-anoTipo")
    divPano.innerHTML = estoque[i].anoTipo

    let divPcambio = document.createElement("p")
    divPcambio.setAttribute("id", "car" + i + "-cambioKM")
    divPcambio.innerHTML = estoque[i].cambioKM

    let divPpreco = document.createElement("p")
    divPpreco.setAttribute("id", "car" + i + "-preco")
    divPpreco.innerHTML = estoque[i].preco

    let divPcorte = document.createElement("p")
    divPcorte.setAttribute("id", "car" + i + "-corte-preço")
    divPcorte.setAttribute("class", "corte-preço")
    divPcorte.innerHTML = estoque[i].corte_preco

    descript.appendChild(divPnome)
    descript.appendChild(divPano)
    descript.appendChild(divPcambio)
    descript.appendChild(divPpreco)
    descript.appendChild(divPcorte)

    divFrame.appendChild(img)
    divFrame.appendChild(descript)
    // divFrame.setAttribute("style", 'background-color: yellow;')

    divDinamic.appendChild(divFrame)

}

