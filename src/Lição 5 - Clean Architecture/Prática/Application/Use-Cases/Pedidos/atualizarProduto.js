import Produtos from '../../../Domain/Entities/Produtos.js';

class AtualizarProduto {

  constructor(produtoRepository) {

    this.produtoRepository = produtoRepository;
  }

  async executar(produtoID, nome, preco) {

    const produtoExistente = await this.produtoRepository.obterPorID(produtoID);
    if (!produtoExistente) throw new Error("produto não encontrado.");

    const produto = new Produtos(produtoID, produtoExistente.nome, produtoExistente.preco);

    if (nome) {

      produto.nome = nome;
    }

    if (preco) {

      produto.preco = preco;
    }

    await this.produtoRepository.atualizar(produto);

    return produto;
  }
}

export default AtualizarProduto;
