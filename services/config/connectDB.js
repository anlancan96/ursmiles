import Sequelize from 'sequelize';
import process from '../environment';

const dentistassistant = new Sequelize(process.DB_HOST);

export default dentistassistant;
