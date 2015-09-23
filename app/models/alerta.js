var connection = require('../../config/database');
var Sequelize = require('sequelize');

module.exports = function() { 

	var Alerta = connection.define('alerta', {
		email: {
			type: Sequelize.STRING
			, field: 'email'
			, unique: true
			, primaryKey: true
		}, 
		potencia: {
			type: Sequelize.INTEGER
			, field: 'potencia'
		}, 
		habilitado: {
			type: Sequelize.BOOLEAN 
			, field: 'habilitar'
		}, 
		
	}, 
	{ 
		tableName: 'alerta'
		, timestamps: false		
	});

	return Alerta;
}