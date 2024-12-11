import { Sequelize } from 'sequelize';
import sequelize from '../database/db.js';

const ProdutosModel = sequelize.define('produtos', {
    produto_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    preco: {
        type: Sequelize.FLOAT,
        allowNull: false,
    },
});

export default ProdutosModel;
