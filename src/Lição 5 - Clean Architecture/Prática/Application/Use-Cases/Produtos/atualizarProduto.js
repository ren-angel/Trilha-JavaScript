import Produtos from '../../../Domain/Entities/Produtos.js';

class AtualizarProduto {

  constructor(produtoRepository) {

    this.produtoRepository = produtoRepository;
  }

  async executar(produtoInfo) {

    const produtoExistente = await this.produtoRepository.obterPorID(produtoInfo.produtoID);
    if (!produtoExistente) throw new Error("produto não encontrado.");

    const produto = new Produtos(produtoInfo.produtoID, produtoExistente.nome, produtoExistente.preco);

    if (produtoInfo.nome) {

      produto.nome = produtoInfo.nome;
    }

    if (produtoInfo.preco) {

      produto.preco = produtoInfo.preco;
    }

    await this.produtoRepository.atualizar(produto);

    return produto;
  }
}

export default AtualizarProduto;
