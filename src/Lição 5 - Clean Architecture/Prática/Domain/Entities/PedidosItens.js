class PedidosItens {

    constructor(pedido, produto) {

      this.pedido = pedido;
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
  