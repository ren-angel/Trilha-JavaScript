import Pedidos from "../../Domain/Entities/Pedidos";
import PedidosModel from "../Models/PedidosModel";
import PedidosItensRepository from "./PedidosItensRepository";

class PedidosRepository {

  constructor() {

    this.pedidosItensRepo = new PedidosItensRepository();
  }

  async criar(pedido) {

    const novoPedido = await PedidosModel.create({
      total: pedido.calcularTotal(),
    });

    for (const item of pedido.obterItens()) {
      await this.pedidosItensRepo.criar(novoPedido.pedido_id, item);
    }

    return novoPedido;
  }

  async obterPorID(pedidoID) {

    const resultado = await PedidosModel.findByPk(pedidoID, {
      include: ["itens"],
    });

    if (!resultado) return null;

    const itens = await this.pedidosItensRepo.obterPorPedidoID(pedidoID);

    return new Pedidos(resultado.pedido_id, itens, resultado.total);
  }

  async obterTodos() {

    const resultados = await PedidosModel.findAll({ include: ["itens"] });

    if (!resultados || resultados.length === 0) return [];

    return resultados.map((resultado) =>
      new Pedidos(
        resultado.pedido_id,
        this.pedidosItensRepo.obterPorPedidoID(resultado.pedido_id),
        resultado.total
      )
    );
  }

  async atualizar(pedido) {
    
    await PedidosModel.update(
      { total: pedido.calcularTotal() },
      { where: { pedido_id: pedido.pedido_id } }
    );
  }

  async remover(pedidoID) {

    await this.pedidosItensRepo.removerPorPedidoID(pedidoID);
    
    await PedidosModel.destroy({ where: { pedido_id: pedidoID } });
  }
}

export default PedidosRepository;