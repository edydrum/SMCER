var connection = require('../../config/database');
var Sequelize = require('sequelize');

module.exports = function() { 
		
	var Usuario = connection.define('usuario', {
		idUsuario: {
			type: Sequelize.INTEGER
			, field: 'id_usuario'
			, unique: true
			, primaryKey: true
			, autoIncrement: true 
		}, 
		nome: {
			type: Sequelize.STRING
			, field: 'nome'
		},
		senha: {
			type: Sequelize.STRING
			, field: 'senha'
		},
		email: {
			type: Sequelize.STRING
			, field: 'email'
		}
	}, 
	{
    	tableName: 'usuario'
		, timestamps: false		
	});

	return Usuario;
}