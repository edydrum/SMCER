var connection = require('../../configs/database');
var Sequelize = require('sequelize');

module.exports = function() { 

	var ConsumoHistorico = connection.define('consumo_historico', {
		timestampConsumoHistorico: {
			type: Sequelize.DATE
			, field: 'ts_consumo_historico'
			, unique: true
			, primaryKey: true
		}, 
		potenciaConsumoHistorico: {
			type: Sequelize.DECIMAL(5,5)
			, field: 'potencia_consumo_historico'
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
		tableName: 'consumo_historico'
		, timestamps: false		
	});

	return ConsumoHistorico;
}