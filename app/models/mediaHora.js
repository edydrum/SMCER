var connection = require('../../config/database');
var Sequelize = require('sequelize');

module.exports = function() { 

	var MediaHora = connection.define('media_hora', {
		id: {
			type: Sequelize.INTEGER
			, field: 'id'
			, unique: true
			, primaryKey: true
		}, 
		hora: {
			type: Sequelize.INTEGER
			, field: 'hora'
		},
		potencia: {
			type: Sequelize.INTEGER
			, field: 'potencia'
		}
	}, 
	{ 
		tableName: 'media_hora'
		, timestamps: false		
	});

	return MediaHora;
}