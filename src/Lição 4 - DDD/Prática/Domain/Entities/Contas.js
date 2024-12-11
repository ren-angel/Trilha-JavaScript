class Contas {

    constructor(contas_id, dono, saldo) {

      if (saldo < 0) throw new Error("O saldo inicial não pode ser negativo.");

      this.contas_id = contas_id;
      this.dono = dono;
      this.saldo = saldo;
    }
  
    pegarSaldo() {

      return this.saldo;
    }
  }
  
export default Contas;