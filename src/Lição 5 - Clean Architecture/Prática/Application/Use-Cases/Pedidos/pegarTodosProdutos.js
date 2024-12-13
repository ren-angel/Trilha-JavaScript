class PegarTodosProduto {

  constructor(produtoRepository) {

    this.produtoRepository = produtoRepository;
  }

  async executar() {

    const produto = await this.produtoRepository.obterTodos();

    return produto;
  }
}

export default PegarTodosProduto;