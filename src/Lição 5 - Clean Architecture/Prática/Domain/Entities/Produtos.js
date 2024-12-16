class Produtos {

    constructor(produto_id, nome, preco) {

      this.produto_id = produto_id;
      this.nome = nome;
      this.preco = preco;
    }
  
    obterNome() {

      return this.nome;
    }

    obterPreco() {

      return this.preco;
    }
  }
  
export default Produtos;