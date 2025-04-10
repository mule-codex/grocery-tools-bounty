import { Sequelize } from "sequelize";

const sequelize = new Sequelize('postgres://postgres:123@127.0.0.1:5433/grocery')

async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
export default sequelize
