import PedidosItens from "../../Domain/Entities/PedidosItens";
import PedidosItensModel from "../Models/PedidosItensModel";

class PedidosItensRepository {

  async criar(pedidoID, item) {

    await PedidosItensModel.create({
      pedido_id: pedidoID,
      produto_id: item.obterProduto().produto_id,
    });
  }

  async obterPorPedidoID(pedidoID) {

    const resultados = await PedidosItensModel.findAll({
      where: { pedido_id: pedidoID },
    });

    if (!resultados || resultados.length === 0) return [];

    return resultados.map(
      (resultado) =>
        new PedidosItens(
          new Produtos(
            resultado.produto_id,
            resultado.nome,
            resultado.preco
          )
        )
    );
  }

  async removerPorPedidoID(pedidoID) {
    
    await PedidosItensModel.destroy({ where: { pedido_id: pedidoID } });
  }
}

export default PedidosItensRepository;