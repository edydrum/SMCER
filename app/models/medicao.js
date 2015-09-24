var connection = require('../../config/database');
var Sequelize = require('sequelize');

module.exports = function() { 

	var Medicao = connection.define('medicao', {
		id: {
			type: Sequelize.INTEGER
			, field: 'id'
			, primaryKey: true
		}, 
		dia: {
			type: Sequelize.DATE
			, primaryKey: true
			, field: 'dia'
		},		
		hora: {
			type: Sequelize.INTEGER
			, primaryKey: true
			, field: 'hora'
		},
		potencia: {
			type: Sequelize.INTEGER
			, field: 'potencia'
		}
	}, 
	{ 
		tableName: 'medicao'
		, timestamps: false		
	});

	return Medicao;
}