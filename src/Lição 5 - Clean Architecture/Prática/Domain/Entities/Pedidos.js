class Pedidos {

  constructor(pedido_id, itens = [], total) {

    this.pedido_id = pedido_id;
    this.itens = itens;
    this.total = total;
  }

  // adicionarItem(produto) {

  //   const item = new PedidosItens(produto);
  //   this.itens.push(item);
  // }

  obterItens() {

    return this.itens;
  }

  calcularTotal() {

    return this.itens.reduce((total, item) => total + item.calcularSubtotal(), 0);
  }
}

export default Pedidos;