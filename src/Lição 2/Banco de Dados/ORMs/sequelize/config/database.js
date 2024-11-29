import { Sequelize } from 'sequelize';

// Aqui definimos a conexão com o banco, colocando suas informações
const sequelize = new Sequelize('teste', 'root', 'root', {
  dialect: 'mysql',
  host: 'localhost',
});

export default sequelize;