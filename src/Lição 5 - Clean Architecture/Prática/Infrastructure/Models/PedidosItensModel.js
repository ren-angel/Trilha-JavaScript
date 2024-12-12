import { Sequelize } from 'sequelize';
import sequelize from '../database/db.js';
import ProdutosModel from './ProdutosModel.js';
import PedidosModel from './PedidosModel.js';

const PedidosItensModel = sequelize.define('pedidos_itens', {
    pedidos_itens_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
});

PedidosModel.belongsToMany(ProdutosModel, {
  through: PedidosItensModel,
  foreignKey: 'pedido_id',
  otherKey: 'produto_id',
});

ProdutosModel.belongsToMany(PedidosModel, {
  through: PedidosItensModel,
  foreignKey: 'produto_id',
  otherKey: 'pedido_id',
});

export default PedidosItensModel;
