import Contas from "../../Domain/Entities/Contas.js";
import ContasModel from "../Models/ContasModel.js";

class ContasRepository {

  async criar(conta) {

    await ContasModel.create({
      dono: conta.dono,
      saldo: conta.saldo,
    });
  }

  async buscarPorID(contaID) {

    const resultado = await ContasModel.findByPk(contaID);
    if (!resultado) return null;

    return new Contas(resultado.contas_id, resultado.dono, resultado.saldo);
  }

  async atualizar(conta) {

    await ContasModel.update(
      { saldo: conta.pegarSaldo() },
      { where: { contas_id: conta.contas_id } }
    );
  }

  async remover(conta) {

    await ContasModel.destroy({
        where: { contas_id: conta.contas_id },
    });
  }
}

export default ContasRepository;