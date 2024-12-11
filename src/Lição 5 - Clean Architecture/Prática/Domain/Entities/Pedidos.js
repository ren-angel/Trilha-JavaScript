class Pedidos {

    constructor(pedido_id, itens, total) {

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
  }
  
export default Pedidos;