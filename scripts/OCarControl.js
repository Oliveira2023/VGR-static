export class CarControl{

    static cardetails(carro){
    
        window.open('veiculoSelecionado.html', '_self')
    
        console.log(carro)
    
        switch (carro){
    
            case "car1":
                console.log('carro 1 selecionao')
    
            break
    
            case "car2":
                console.log('carro 2 selecionao')
    
            break
    
            default:
                console.log('default')
        }
    }

}