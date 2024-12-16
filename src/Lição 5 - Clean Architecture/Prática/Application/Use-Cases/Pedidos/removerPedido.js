class RemoverPedido {

  constructor(pedidoRepository) {

    this.pedidoRepository = pedidoRepository;
  }

  async executar(pedidoID) {

    const pedidoExistente = await this.pedidoRepository.obterPorID(pedidoID);
    if (!pedidoExistente) throw new Error("pedido não encontrada.");

    await this.pedidoRepository.remover(pedidoExistente);

    return true;
  }
}

export default RemoverPedido;