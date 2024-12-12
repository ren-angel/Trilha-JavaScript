class PedidosItens {

    constructor(produto) {

      this.produto = produto;
    }
  
    obterProduto() {

      return this.produto;
    }
  
    calcularSubtotal() {

      return this.produto.obterPreco();
    }
  }
  
  export default PedidosItens;
  