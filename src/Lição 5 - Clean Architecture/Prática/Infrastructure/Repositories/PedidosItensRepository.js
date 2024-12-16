import PedidosItens from "../../Domain/Entities/PedidosItens.js";
import PedidosItensModel from "../Models/PedidosItensModel.js";

class PedidosItensRepository {

  async criar(pedidoID, item, transacao) {

    await PedidosItensModel.create(
      {
        pedido_id: pedidoID,
        produto_id: item.produto_id,
      },
      { transacao }
    );
  }  

  async obterPorPedidoID(pedidoID) {

    const resultados = await PedidosItensModel.findAll({
      where: { pedido_id: pedidoID },
      include: {
        model: ProdutosModel,
        as: 'produto',
      },
    });

    if (!resultados || resultados.length === 0) return [];
  
    return resultados.map(
      (resultado) =>
        new PedidosItens(
          pedidoID,
          new Produtos(
            resultado.produto.produto_id,
            resultado.produto.nome,
            resultado.produto.preco
          )
        )
    );
  }  

  async removerPorPedidoID(pedidoID) {
    
    await PedidosItensModel.destroy({ where: { pedido_id: pedidoID } });
  }
}

export default PedidosItensRepository;