import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('banco', 'root', 'root', {
  dialect: 'mysql',
  host: 'localhost',
});

export default sequelize;