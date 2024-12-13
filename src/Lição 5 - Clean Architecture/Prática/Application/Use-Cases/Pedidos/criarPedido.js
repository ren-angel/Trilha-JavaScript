import Pedidos from "../../../Domain/Entities/Pedidos";

class CriarPedidos {

  constructor(pedidosRepository) {

    this.pedidosRepository = pedidosRepository;
  }

  async executar(nome, preco) {/

    const pedidos = new Pedidos(null, nome, preco);
    await this.pedidosRepository.criar(pedidos);

    return pedidos;
  }
}

export default CriarPedidos;