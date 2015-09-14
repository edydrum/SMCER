var connection = require('../../configs/database');
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
		nomeUsuario: {
			type: Sequelize.STRING
			, field: 'nome_usuario'
		}
	}, 
	{
    	tableName: 'usuario'
		, timestamps: false		
	});

	return Usuario;
}