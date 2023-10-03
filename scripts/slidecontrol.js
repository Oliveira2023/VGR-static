let veiculo3 = {
    nome: 'Ford New Fiesta Hatch 2020',
    km: "38.531",
    local: "São Paulo",
    year: 2020,
    fipe: '45.000,00',
    valor: "42000,00",
    transmissao: 'Transmissão manual',
    details: 'Faça uma simulação de acordo com suas preferências e escolha o número de parcelas convenientes para você.',
    slide1: '/images/fiesta20red600x400.jpg',
    slide2: "/images/fiesta2-600x400.jpg",
    slide3: "/images/fiesta3-600x400.jpg",
    slide4: "/images/fiesta2-600x400.jpg",
    slide5: "/images/fiesta5-600x400.jpg",
    slide6: "/images/fiesta6-600x400.jpg",
    thumb1: "/images/fiesta20.jpg",
    thumb2: "/images/fiesta-frente-dir.jpg",
    thumb3: '/images/fiesta-frentelateral-esquerda.jpg',
    thumb4: '/images/fiesta-frente-dir.jpg',
    thumb5: '/images/fiesta-rodaesquerda.jpg',
    thumb6: '/images/fiesta-trazeira.jpg'
}

let veiculo2 = {
    nome: 'Hyundai HB20 EVOLUTION',
    km: "38.531",
    local: "São Paulo",
    year: 2018,
    fipe: '67.000,00',
    valor: '65.199,00',
    transmissao: 'Transmissão manual',
    details: 'Faça uma simulação de acordo com suas preferências e escolha o número de parcelas convenientes para você.',
    slide1: '/images/hb20frente600x400.jpg',
    slide2: '/images/hb20Painel600x400.jpg',
    slide3: '/images/hb20LatDir600x400.jpg',
    slide4: '/images/hb20moto600x400.jpg',
    slide5: '/images/hb20RodaE600x400.jpg',
    slide6: '/images/hb20Traz600x400.jpg',
    thumb1: '/images/hb20frente600x400.jpg',
    thumb2: '/images/hb20Painel600x400.jpg',
    thumb3: '/images/hb20LatDir600x400.jpg',
    thumb4: '/images/hb20moto600x400.jpg',
    thumb5: '/images/hb20RodaE600x400.jpg',
    thumb6: '/images/hb20Traz600x400.jpg'
}

let veiculoSelecionado = sessionStorage.getItem('carro')

//car-1
let nVeiculo = veiculoSelecionado.split('-')[1]
let veiculo = 'veiculo' + nVeiculo
let imagem = 'imagem' + nVeiculo
let slide = 'slide' + nVeiculo

if (veiculo=='veiculo1'){veiculo=veiculo1}
if (veiculo=='veiculo2'){veiculo=veiculo2}
if (veiculo=='veiculo3'){veiculo=veiculo3}
if (veiculo=='veiculo4'){veiculo=veiculo4}
if (veiculo=='veiculo5'){veiculo=veiculo5}
if (veiculo=='veiculo6'){veiculo=veiculo6}
if (veiculo=='veiculo7'){veiculo=veiculo7}
if (veiculo=='veiculo8'){veiculo=veiculo8}
if (veiculo=='veiculo9'){veiculo=veiculo9}
if (veiculo=='veiculo10'){veiculo=veiculo10}


let imagem1 = document.querySelector("#foto1")
imagem1.setAttribute('src', veiculo.slide1)

let imagem2 = document.querySelector("#foto2")
imagem2.setAttribute('src', veiculo.slide2)

let imagem3 = document.querySelector("#foto3")
imagem3.setAttribute('src', veiculo.slide3)

let imagem4 = document.querySelector("#foto4")
imagem4.setAttribute('src', veiculo.slide4)

let imagem5 = document.querySelector("#foto5")
imagem5.setAttribute('src', veiculo.slide5)

let imagem6 = document.querySelector("#foto6")
imagem6.setAttribute('src', veiculo.slide6)

// imagens miniaturas

let thumb1 = document.querySelector('#thumb1')
thumb1.setAttribute('src', veiculo.thumb1)

let thumb2 = document.querySelector('#thumb2')
thumb2.setAttribute('src', veiculo.thumb2)

let thumb3 = document.querySelector('#thumb3')
thumb3.setAttribute('src', veiculo.thumb3)

let thumb4 = document.querySelector('#thumb4')
thumb4.setAttribute('src', veiculo.thumb4)

let thumb5 = document.querySelector('#thumb5')
thumb5.setAttribute('src', veiculo.thumb5)

let thumb6 = document.querySelector('#thumb6')
thumb6.setAttribute('src', veiculo.thumb6)

// Detalhes do carro

let nomeCarro = document.querySelector('#nomeVeiculo')
nomeCarro.innerHTML = veiculo.nome
let preco = document.querySelector('#valorVeiculo')
preco.innerHTML = "<span>R$</span> " + veiculo.valor
let ano = document.querySelector('#anoVeiculo')
ano.innerHTML = veiculo.year
let transmissao = document.querySelector('#transmissaoVeiculo')
transmissao.innerHTML = veiculo.transmissao
let detahes = document.querySelector('#detalhesVeiculo')
detahes.innerHTML = veiculo.details
let quilometragem = document.querySelector('#kmVeiculo')
quilometragem.innerHTML = veiculo.km + "km" + " - " + veiculo.local
let fipeVeiculo = document.querySelector('#fipeVeiculo')
fipeVeiculo.innerHTML = "<span>Fipe: R$</span> " + veiculo.fipe

//codigo do slide control//
let slideIndex = 1
showSlides(slideIndex)

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n)
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n)
}

function showSlides(n) {
    let i
    let slides = document.getElementsByClassName('mySlides')
    let demo = document.getElementsByClassName('demo')
    let captionText = document.getElementById('caption')
    let dot = document.getElementsByClassName('dot')
    if (n>slides.length) {slideIndex =1}
    if (n<1) {slideIndex = slides.length}
    for (i=0; i< slides.length; i++){
        slides[i].style.display = 'none'
    }
    for (i=0; i< demo.length; i++) {
        demo[i].className = demo[i].className.replace('active', '')
    }
    for(let j=0; j<dot.length; j++){
        dot[j].className = dot[j].className.replace('active', '')        
    }
    
    slides[slideIndex-1].style.display = 'block'
    demo[slideIndex -1].className += ' active'
    dot[slideIndex -1].className += ' active'
    
}
// codigo do slide controll//


