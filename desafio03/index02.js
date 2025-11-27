class Correios {
    calcularCusto(produto) {
        return produto.preco * 0.1;
    }
}

class FedEx {
    calcularCusto(produto) {
        return produto.preco * 0.2;
    }
}

class JadLog { 
    calcularCusto(produto) {
        return produto.preco * 0.15; 
    }
}

class CalculadoraFrete {
    processar(produto, servicoDeFrete) {
        const custo = servicoDeFrete.calcularCusto(produto);
        console.log(`Custo do frete: R$ ${custo.toFixed(2)}`);
    }
}

const produto = { nome: "Teclado", preco: 100 };
const calculadora = new CalculadoraFrete();

calculadora.processar(produto, new Correios());
calculadora.processar(produto, new JadLog());