class RemoverPedido {

  constructor(pedidoRepository) {

    this.pedidoRepository = pedidoRepository;
  }

  async executar(pedidoID) {

    const pedidoExistente = await this.pedidoRepository.obterPorID(pedidoID);
    if (!pedidoExistente) throw new Error("pedido não encontrada.");

    await this.pedidoRepository.remover(pedidoExistente.pedido_id);

    return true;
  }
}

export default RemoverPedido;