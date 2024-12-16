import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('ecommerce', 'root', 'admin', {
  dialect: 'mysql',
  host: 'localhost',
});

export default sequelize;