var connection = require('../../config/database');
var Sequelize = require('sequelize');

module.exports = function() { 

	var Instantanea = connection.define('instantanea', {
		id: {
			type: Sequelize.INTEGER
			, field: 'id'
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