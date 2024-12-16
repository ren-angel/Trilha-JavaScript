class Pedidos {

  constructor(pedido_id, itens = [], total) {

    this.pedido_id = pedido_id;
    this.itens = itens;
    this.total = total;
  }

  obterItens() {

    return this.itens;
  }

  calcularTotal() {

    return this.itens.reduce((total, item) => total + item.calcularSubtotal(), 0);
  }
}

export default Pedidos;