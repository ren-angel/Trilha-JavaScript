import ContasRepository from '../../Infrastructure/Repositories/ContasRepository.js';

import CriarConta from '../../Application/Use-Cases/criarConta.js';
import PegarConta from '../../Application/Use-Cases/pegarConta.js';
import AtualizarSaldo from '../../Application/Use-Cases/atualizarSaldo.js';
import RemoverConta from '../../Application/Use-Cases/removerConta.js';

const contasRepository = new ContasRepository();

const criarContaApp = new CriarConta(contasRepository);
const pegarContaApp = new PegarConta(contasRepository);
const atualizarSaldoApp = new AtualizarSaldo(contasRepository);
const removerContaApp = new RemoverConta(contasRepository);

const criarConta = async (req, res) => {

  const { dono, saldoInicial } = req.body;

  try {

    const conta = await criarContaApp.executar(dono, saldoInicial);

    res.status(201).send(conta);
  } catch (error) {

    res.status(500).send({ mensagem: error.message });
  }
};

const pegarConta = async (req, res) => {

    const contaID = req.params.contaID;
  
    try {
  
      const conta = await pegarContaApp.executar(contaID);
  
      res.status(200).send(conta);
    } catch (error) {
  
      res.status(500).send({ mensagem: error.message });
    }
};

const atualizarSaldo = async (req, res) => {

    const contaID = req.params.contaID;
    const saldo = req.body.saldo;
  
    try {
  
      const conta = await atualizarSaldoApp.executar(contaID, saldo);
  
      res.status(200).send(conta);
    } catch (error) {
  
      res.status(500).send({ mensagem: error.message });
    }
};

const removerConta = async (req, res) => {

    const contaID = req.params.contaID;
  
    try {
  
      await removerContaApp.executar(contaID);
  
      res.status(204).send();
    } catch (error) {
  
      res.status(500).send({ mensagem: error.message });
    }
};

export default {
    criarConta,
    pegarConta,
    atualizarSaldo,
    removerConta
}