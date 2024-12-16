import PedidosRepository from '../../Infrastructure/Repositories/PedidosRepository.js';

import CriarPedido from '../../Application/Use-Cases/Pedidos/criarPedido.js';
import PegarPedido from '../../Application/Use-Cases/Pedidos/pegarPedido.js';
import PegarTodosPedidos from '../../Application/Use-Cases/Pedidos/pegarTodosPedidos.js';
import RemoverPedido from '../../Application/Use-Cases/Pedidos/removerPedido.js';

const pedidosRepository = new PedidosRepository();

const criarPedidoApp = new CriarPedido(pedidosRepository);
const pegarPedidoApp = new PegarPedido(pedidosRepository);
const pegarTodosPedidosApp = new PegarTodosPedidos(pedidosRepository);
const removerPedidoApp = new RemoverPedido(pedidosRepository);

const criarPedido = async (req, res) => {

  const itens = req.body.itens;

  try {

    await criarPedidoApp.executar(itens);

    return res.redirect("/pedidos");
  } catch (error) {

    res.status(500).send({ mensagem: error.message });
  }
};

const pegarPedido = async (req, res) => {

    const pedidoID = req.params.pedidoID;
  
    try {
  
      const pedido = await pegarPedidoApp.executar(pedidoID);

      return res.render('pedido', { pedido });
    } catch (error) {
  
      res.status(500).send({ mensagem: error.message });
    }
};

const pegarTodosPedido = async (req, res) => {
  
    try {
  
      const pedidos = await pegarTodosPedidosApp.executar();
  
      return res.render('pedidos', { pedidos });
    } catch (error) {
  
      res.status(500).send({ mensagem: error.message });
    }
};

const removerPedido = async (req, res) => {

    const pedidoID = req.params.pedidoID;
  
    try {
  
      await removerPedidoApp.executar(pedidoID);
  
      return res.redirect("/pedidos");
    } catch (error) {
  
      res.status(500).send({ mensagem: error.message });
    }
};

export default {
    criarPedido,
    pegarPedido,
    pegarTodosPedido,
    removerPedido
}