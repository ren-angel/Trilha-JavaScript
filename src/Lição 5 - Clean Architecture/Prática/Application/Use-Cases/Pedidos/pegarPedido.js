class PegarPedido {

  constructor(pedidoRepository) {

    this.pedidoRepository = pedidoRepository;
  }

  async executar(pedidoID) {

    const pedido = await this.pedidoRepository.obterPorID(pedidoID);

    return pedido;
  }
}

export default PegarPedido;