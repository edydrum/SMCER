var connection = require('../../configs/database');
var Sequelize = require('sequelize');

module.exports = function() { 

	var Email = connection.define('email', {
		idEmail: {
			type: Sequelize.INTEGER
			, field: 'id_email'
			, unique: true
			, primaryKey: true
			, autoIncrement: true 
		}, 
		email: {
			type: Sequelize.STRING
			, field: 'email'
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
		tableName: 'email'
		, timestamps: false		
	});

	return Email;
}