var connection = require('../../configs/database');
var Sequelize = require('sequelize');

module.exports = function() { 

	var Alerta = connection.define('alerta', {
		idAlerta: {
			type: Sequelize.INTEGER
			, field: 'id_alerta'
			, unique: true
			, primaryKey: true
			, autoIncrement: true 
		}, 
		nomeAlerta: {
			type: Sequelize.STRING
			, field: 'nome_alerta'
		}, 
		valorAlerta: {
			type: Sequelize.FLOAT
			, field: 'valor_alerta'
		}, 
		taxaAlerta: {
			type: Sequelize.FLOAT
			, field: 'taxa_alvo_alerta'
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
		tableName: 'alerta'
		, timestamps: false		
	});

	return Alerta;
}