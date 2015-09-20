var connection = require('../../config/database');
var Sequelize = require('sequelize');

module.exports = function() { 

	var Instantanea = connection.define('instantanea', {
		idCircuito: {
			type: Sequelize.INTEGER
			, field: 'id_circuito'
			, unique: true
			, primaryKey: true
		}, 
		hora: {
			type: Sequelize.DATE
			, field: 'hora'
		},
		potencia: {
			type: Sequelize.INTEGER
			, field: 'potencia'
		}
	}, 
	{ 
		tableName: 'instantanea'
		, timestamps: false		
	});

	return Instantanea;
}