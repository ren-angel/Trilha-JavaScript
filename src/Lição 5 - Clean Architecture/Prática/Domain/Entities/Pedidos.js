class Pedidos {

  constructor(pedido_id, itens = [], total) {

    this.pedido_id = pedido_id;
    this.itens = itens;
    this.total = total;
  }

  obterItens() {

    return this.itens;
  }

  obterTotal() {

    return this.total;
  }

  calcularTotal() {

    if (Array.isArray(this.itens)) {

      return this.itens.reduce((total, item) => total + item.preco, 0);
    } else {

      return this.itens.preco;
    }
  }  
}

export default Pedidos;