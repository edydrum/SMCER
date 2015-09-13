var connection = require('../../configs/database');
var Sequelize = require('sequelize');

module.exports = function() { 

	var ConsumoHora = connection.define('consumo_hora', {
		timestampConsumoHora: {
			type: Sequelize.DATE
			, field: 'ts_consumo_hora'
			, unique: true
			, primaryKey: true
		}, 
		potenciaConsumoHora: {
			type: Sequelize.DECIMAL(5,5)
			, field: 'potencia_consumo_hora'
		}, 
		idCircuito: {
			type: Sequelize.INTEGER
			, field: 'fk_id_circuito'
			, references: {
				model: 'circuito'
				, key: 'id_circuito'
			}
		}
	}, 
	{ 
		tableName: 'consumo_hora'
		, timestamps: false		
	});

	return ConsumoHora;
}