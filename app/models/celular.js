var connection = require('../../configs/database');
var Sequelize = require('sequelize');

module.exports = function() { 

	var Celular = connection.define('celular', {
		idCelular: {
			type: Sequelize.INTEGER
			, field: 'id_celular'
			, unique: true
			, primaryKey: true
			, autoIncrement: true 
		}, 
		numeroCelular: {
			type: Sequelize.INTEGER
			, field: 'numero_celular'
		}, 
		idUsuario: {
			type: Sequelize.INTEGER
			, field: 'fk_id_usuario'
			, references: {
				model: 'usuario'
				, key: 'id_usuario'
			}
		}
	}, 
	{ 
		tableName: 'celular'
		, timestamps: false		
	});

	return Celular;
}