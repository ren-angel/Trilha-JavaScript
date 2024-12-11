import express from 'express';
import ContasController from '../Controllers/ContasController.js';

const contasRouter = express.Router();

contasRouter.post("/criar", ContasController.criarConta);
contasRouter.get("/pegar/:contaID", ContasController.pegarConta);
contasRouter.put("/atualizar/:contaID", ContasController.atualizarSaldo);
contasRouter.delete("/remover/:contaID", ContasController.removerConta);

export default contasRouter;