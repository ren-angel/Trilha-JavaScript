import express from 'express';
import ProdutosController from '../../Interface/Controllers/ProdutosController.js';

const produtosRouter = express.Router();

produtosRouter.get('/', ProdutosController.pegarTodosProdutos);

produtosRouter.get('/criar', (req, res) => res.render('criar-produto'));
produtosRouter.post('/criar', ProdutosController.criarProduto);

produtosRouter.get('/atualizar/:produtoID', (req, res) => res.render('atualizar-produto', { produtoID: req.params.produtoID }));
produtosRouter.put('/atualizar/:produtoID', ProdutosController.atualizarProduto);

produtosRouter.get('/remover/:produtoID', (req, res) => res.render('remover-produto', { produtoID: req.params.produtoID }));
produtosRouter.delete('/remover/:produtoID', ProdutosController.removerproduto);

produtosRouter.get('/:produtoID', ProdutosController.pegarProduto);

export default produtosRouter;