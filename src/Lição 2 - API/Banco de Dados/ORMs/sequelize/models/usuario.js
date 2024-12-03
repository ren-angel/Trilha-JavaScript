import { Sequelize } from 'sequelize';
import sequelize from '../config/database.js';

// Aqui definimos os modelos (tabelas) do banco
const usuario = sequelize.define('usuario', {
    usuario_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    idade: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
});

export default usuario;
