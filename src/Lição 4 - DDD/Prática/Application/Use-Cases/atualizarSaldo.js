import Contas from "../Domain/Entities/Contas.js";

class AtualizarSaldo {

  constructor(contaRepository) {

    this.contaRepository = contaRepository;
  }

  async executar(contaID, saldo) {

    const contaExistente = await this.contaRepository.buscarPorID(contaID);
    if (!contaExistente) throw new Error("Conta não encontrada.");

    const conta = new Contas(contaID, contaExistente.dono, saldo);

    await this.contaRepository.atualizar(conta);

    return conta;
  }
}

export default AtualizarSaldo;
