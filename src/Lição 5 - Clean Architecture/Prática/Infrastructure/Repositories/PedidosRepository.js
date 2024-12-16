import sequelize from "../database/db.js";
import Pedidos from "../../Domain/Entities/Pedidos.js";
import PedidosItens from "../../Domain/Entities/PedidosItens.js";
import PedidosModel from "../Models/PedidosModel.js";
import ProdutosModel from "../Models/ProdutosModel.js";
import PedidosItensRepository from "./PedidosItensRepository.js";

class PedidosRepository {

  constructor() {

    this.pedidosItensRepo = new PedidosItensRepository();
  }

  async criar(pedido) {
    const transacao = await sequelize.transaction();

    try {

      const novoPedido = await PedidosModel.create(
        { total: pedido.obterTotal() },
        { transacao }
      );
  
      for (const item of pedido.obterItens()) {

        await this.pedidosItensRepo.criar(novoPedido.pedido_id, item, transacao);
      }
  
      await transacao.commit();
      return novoPedido;
    } catch (error) {

      await transacao.rollback();
    }
  }

  async obterPorID(pedidoID) {

    const resultado = await PedidosModel.findByPk(pedidoID, {
      include: {
        model: ProdutosModel,
        as: 'itens',
        through: { attributes: [] },
      },
    });

    if (!resultado) return null;
  
    const itens = resultado.itens.map(
      (produto) => new PedidosItens(pedidoID, produto)
    );

    return new Pedidos(resultado.pedido_id, itens, resultado.total);
  }  

  async obterTodos() {

    const resultados = await PedidosModel.findAll({
      include: {
        model: ProdutosModel,
        as: 'itens',
        through: { attributes: [] },
      },
    });
  
    if (!resultados || resultados.length === 0) return [];
  
    return resultados.map(
      (resultado) =>
        new Pedidos(
          resultado.pedido_id,
          resultado.itens.map(
            (produto) => new PedidosItens(resultado.pedido_id, produto)
          ),
          resultado.total
        )
    );
  }

  async remover(pedidoID) {

    await this.pedidosItensRepo.removerPorPedidoID(pedidoID);
    
    await PedidosModel.destroy({ where: { pedido_id: pedidoID } });
  }
}

export default PedidosRepository;