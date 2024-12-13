class PegarProduto {

  constructor(produtoRepository) {

    this.produtoRepository = produtoRepository;
  }

  async executar(produtoID) {

    const produto = await this.produtoRepository.obterPorID(produtoID);

    return produto;
  }
}

export default PegarProduto;