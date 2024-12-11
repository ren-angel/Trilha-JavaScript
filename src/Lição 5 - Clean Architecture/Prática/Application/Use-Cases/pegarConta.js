class PegarConta {

  constructor(contaRepository) {

    this.contaRepository = contaRepository;
  }

  async executar(contaID) {

    const conta = await this.contaRepository.buscarPorID(contaID);

    return conta;
  }
}

export default PegarConta;