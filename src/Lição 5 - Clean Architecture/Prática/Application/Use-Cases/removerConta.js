class RemoverConta {

  constructor(contaRepository) {

    this.contaRepository = contaRepository;
  }

  async executar(contaID) {

    const contaExistente = await this.contaRepository.buscarPorID(contaID);
    if (!contaExistente) throw new Error("Conta não encontrada.");

    await this.contaRepository.remover(contaExistente);

    return true;
  }
}

export default RemoverConta;