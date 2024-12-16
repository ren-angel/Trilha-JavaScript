import Produtos from "../../Domain/Entities/Produtos.js";
import ProdutosModel from "../Models/ProdutosModel.js";

class ProdutosRepository {

  async criar(produto) {

    await ProdutosModel.create({
      nome: produto.dono,
      preco: produto.preco,
    });
  }

  async obterPorID(produtoID) {

    const resultado = await ProdutosModel.findByPk(produtoID);
    if (!resultado) return null;

    return new Produtos(resultado.produto=_id, resultado.nome, resultado.preco);
  }

  async obterTodos() {

    const resultados = await ProdutosModel.findAll();
    if (!resultados || resultados.length === 0) return [];

    return resultados.map(resultado => 
      new Produtos(resultado.produto_id, resultado.nome, resultado.preco)
    );
  }

  async atualizar(produto) {

    await ProdutosModel.update(
      { nome: produto.obterNome(), preco: produto.obterPreco() },
      { where: { produto_id: produto.produtoID } }
    );
  }

  async remover(produto) {

    await ProdutosModel.destroy({
        where: { produto_id: produto.produtoID },
    });
  }
}

export default ProdutosRepository;