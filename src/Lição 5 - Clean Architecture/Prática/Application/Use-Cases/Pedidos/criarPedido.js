import Pedidos from "../../../Domain/Entities/Pedidos.js";

class CriarPedido {

  constructor(pedidosRepository) {

    this.pedidosRepository = pedidosRepository;
  }

  async executar(itens) {

    const pedido = new Pedidos(null, itens || []);
    pedido.total = pedido.calcularTotal();

    const novoPedido = await this.pedidosRepository.criar(pedido);
    return novoPedido;
  }
}

export default CriarPedido;