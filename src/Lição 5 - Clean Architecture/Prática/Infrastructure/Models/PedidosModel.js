import { Sequelize } from 'sequelize';
import sequelize from '../database/db.js';

this.pedido_id = pedido_id;
      this.itens = itens;
      this.total = total;

const PedidosModel = sequelize.define('produtos', {
    pedido_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    preco: {
        type: Sequelize.FLOAT,
        allowNull: false,
    },
    quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
});

export default PedidosModel;
