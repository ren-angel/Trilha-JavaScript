import Pedidos from "../../../Domain/Entities/Pedidos.js";
import Produtos from "../../../Domain/Entities/Produtos.js";

class CriarPedido {

  constructor(pedidosRepository, produtoRepository) {
    this.pedidosRepository = pedidosRepository;
    this.produtoRepository = produtoRepository;
  }

  async executar(itensIDs) {

    const itens = [];
    for (const produtoID of itensIDs) {

      const produto = await this.produtoRepository.obterPorID(produtoID);

      if (produto) {

        itens.push(new Produtos(produto.produto_id, produto.nome, produto.preco));
      }
    }

    const pedido = new Pedidos(null, itens);
    pedido.total = pedido.calcularTotal();

    console.log(pedido);

    const novoPedido = await this.pedidosRepository.criar(pedido);
    return novoPedido;
  }
}

export default CriarPedido;
