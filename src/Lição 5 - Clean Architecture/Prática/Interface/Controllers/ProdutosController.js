import ProdutosRepository from '../../Infrastructure/Repositories/ProdutosRepository.js';

import CriarProduto from '../../Application/Use-Cases/Produtos/criarProduto.js';
import PegarProduto from '../../Application/Use-Cases/Produtos/pegarProduto.js';
import PegarTodosProdutos from '../../Application/Use-Cases/Produtos/pegarTodosProdutos.js';
import AtualizarProduto from '../../Application/Use-Cases/Produtos/atualizarProduto.js';
import RemoverProduto from '../../Application/Use-Cases/Produtos/removerProduto.js';

const produtosRepository = new ProdutosRepository();

const criarProdutoApp = new CriarProduto(produtosRepository);
const pegarProdutoApp = new PegarProduto(produtosRepository);
const pegarTodosProdutosApp = new PegarTodosProdutos(produtosRepository);
const atualizarProdutoApp = new AtualizarProduto(produtosRepository);
const removerProdutoApp = new RemoverProduto(produtosRepository);

const criarProduto = async (req, res) => {

  const { nome, preco } = req.body;

  try {

    await criarProdutoApp.executar(nome, preco);

    return res.redirect("/produtos");
  } catch (error) {

    res.status(500).send({ mensagem: error.message });
  }
};

const pegarProduto = async (req, res) => {

    const produtoID = req.params.produtoID;
  
    try {
  
      const produto = await pegarProdutoApp.executar(produtoID);

      return res.render('produto', { produto });
    } catch (error) {
  
      res.status(500).send({ mensagem: error.message });
    }
};

const pegarTodosProdutos = async (req, res) => {
  
    try {
  
      const produtos = await pegarTodosProdutosApp.executar();
  
      return res.render('produtos', { produtos });
    } catch (error) {
  
      res.status(500).send({ mensagem: error.message });
    }
};

const atualizarProduto = async (req, res) => {

    const produtoID = req.params.produtoID;
    const { nome, preco } = req.body;
  
    try {
  
      const produto = await atualizarProdutoApp.executar({ produtoID, nome, preco });
  
      return res.redirect("/produtos");
    } catch (error) {
  
      res.status(500).send({ mensagem: error.message });
    }
};

const removerproduto = async (req, res) => {

    const produtoID = req.params.produtoID;
  
    try {
  
      await removerProdutoApp.executar(produtoID);
  
      return res.redirect("/produtos");
    } catch (error) {
  
      res.status(500).send({ mensagem: error.message });
    }
};

export default {
    criarProduto,
    pegarProduto,
    pegarTodosProdutos,
    atualizarProduto,
    removerproduto
}