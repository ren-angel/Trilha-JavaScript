import { Sequelize } from 'sequelize';
import sequelize from '../database/db.js';

const ContasModel = sequelize.define('contas', {
    contas_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    dono: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    saldo: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
});

export default ContasModel;
