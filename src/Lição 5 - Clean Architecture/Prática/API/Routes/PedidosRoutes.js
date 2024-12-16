import express from 'express';
import PedidosController from '../../Interface/Controllers/PedidosController.js';

const pedidosRouter = express.Router();

pedidosRouter.get('/', PedidosController.pegarTodosPedido);

pedidosRouter.get('/:pedidoID', PedidosController.pegarPedido);

pedidosRouter.get('/criar', (req, res) => res.render('criar-pedido'));
pedidosRouter.post('/criar', PedidosController.criarPedido);

pedidosRouter.get('/remover/:pedidoID', (req, res) => res.render('remover-pedido', { pedidoID: req.params.pedidoID }));
pedidosRouter.delete('/remover/:pedidoID', PedidosController.removerPedido);

export default pedidosRouter;