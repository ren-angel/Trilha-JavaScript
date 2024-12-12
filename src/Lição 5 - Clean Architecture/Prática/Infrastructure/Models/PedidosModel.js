import { Sequelize } from 'sequelize';
import sequelize from '../database/db.js';

const PedidosModel = sequelize.define('pedidos', {
  pedido_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  total: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
});

export default PedidosModel;
