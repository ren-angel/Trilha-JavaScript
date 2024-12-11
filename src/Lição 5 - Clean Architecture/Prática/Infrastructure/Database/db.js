import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('ecommerce', 'root', 'root', {
  dialect: 'mysql',
  host: 'localhost',
});

export default sequelize;