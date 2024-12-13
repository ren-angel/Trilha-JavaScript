import Produtos from '../../../Domain/Entities/Produtos.js';

class CriarProduto {

  constructor(produtoRepository) {

    this.produtoRepository = produtoRepository;
  }

  async executar(nome, preco) {

    const produto = new Produtos(null, nome, preco);
    await this.produtoRepository.criar(produto);

    return produto;
  }
}

export default CriarProduto;