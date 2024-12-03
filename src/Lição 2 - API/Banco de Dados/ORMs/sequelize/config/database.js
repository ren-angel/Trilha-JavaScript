// instale com 'npm install mysql2 sequelize'
import { Sequelize } from 'sequelize';

// Aqui definimos a conexão com o banco, colocando suas informações como: nome do banco, nome do usuário e senha, o tipo de banco que será usado e o host
const sequelize = new Sequelize('teste', 'root', 'root', {
  dialect: 'mysql',
  host: 'localhost',
});

export default sequelize;