class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}

class ItemVenda {
    constructor(produto, quantidade) {
        this.produto = produto;
        this.quantidade = quantidade;
    }

    getSubtotal() {
        return this.produto.preco * this.quantidade;
    }
}

class Venda {
    constructor() {
        this.itens = [];
    }

    adicionarItem(item) {
        this.itens.push(item);
    }

    getTotal() {
        return this.itens.reduce((total, item) => total + item.getSubtotal(), 0);
    }
}

const p1 = new Produto("Camisa", 50);
const p2 = new Produto("Meia", 10);

const v = new Venda();
v.adicionarItem(new ItemVenda(p1, 2)); 
v.adicionarItem(new ItemVenda(p2, 3)); 

console.log(`Total da Venda: R$ ${v.getTotal()}`);