const Sequelize = require('sequelize');

const sequelize = new Sequelize('mmartan', 'marinho', 'D2C9mhMz', {
	host: 'mydbinstance.cr8pzwvthsx4.us-west-2.rds.amazonaws.com',
	dialect: 'postgres',
	port: 5432,
	operatorsAliases: false,
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000
	}
});

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});

module.exports = { 
    client: sequelize, 
    dataTypes: Sequelize 
};