class PegarTodosPedidos {

  constructor(pedidoRepository) {

    this.pedidoRepository = pedidoRepository;
  }

  async executar() {

    const pedido = await this.pedidoRepository.obterTodos();

    return pedido;
  }
}

export default PegarTodosPedidos;