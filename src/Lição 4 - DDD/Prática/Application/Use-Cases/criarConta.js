import Contas from "../Domain/Entities/Contas.js";

class CriarConta {

  constructor(contaRepository) {

    this.contaRepository = contaRepository;
  }

  async executar(dono, saldoInicial) {

    const conta = new Contas(null, dono, saldoInicial);
    await this.contaRepository.criar(conta);

    return conta;
  }
}

export default CriarConta;