class RemoverProduto {

  constructor(produtoRepository) {

    this.produtoRepository = produtoRepository;
  }

  async executar(produtoID) {

    const produtoExistente = await this.produtoRepository.obterPorID(produtoID);
    if (!produtoExistente) throw new Error("produto não encontrada.");

    await this.produtoRepository.remover(produtoExistente);

    return true;
  }
}

export default RemoverProduto;