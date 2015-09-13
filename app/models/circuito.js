var connection = require('../../configs/database');
var Sequelize = require('sequelize');

module.exports = function() { 
		
	var Circuito = connection.define('circuito', {
		idCircuito: {
			type: Sequelize.INTEGER
			, field: 'id_circuito'
			, unique: true
			, primaryKey: true
			, autoIncrement: true
		}, 
		nomeCircuito: {
			type: Sequelize.STRING
			, field: 'nome_circuito'
		}
	},  {
		tableName: 'circuito',  
		timestamps: false		
	});

	return Circuito;
}