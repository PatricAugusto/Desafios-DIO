class Carro{
    marca;
    cor;
    gastoMedioPorKm;

    constructor (marca, cor, gastoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularGastosDePercurso(distancia, precoCombustivel){
        return distancia * this.gastoMedioPorKm * precoCombustivel;
    }
}

const uno = new Carro("Fiat", "Vermelho", 1/12);
const resultado = uno.calcularGastosDePercurso(70, 5);
console.log(resultado.toFixed(2));