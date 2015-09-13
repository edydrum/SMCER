var connection = require('../../configs/database');
var Sequelize = require('sequelize');

module.exports = function() { 

	var ConsumoHoraFechada = connection.define('consumo_hora_fechada', {
		horaConsumoHoraFechada: {
			type: Sequelize.DATE
			, field: 'hr_consumo_hora_fechada'
			, unique: true
			, primaryKey: true
		}, 
		potenciaConsumoHoraFechada: {
			type: Sequelize.DECIMAL(5,5)
			, field: 'potencia_consumo_hora_fechada'
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
		tableName: 'consumo_hora_fechada'
		, timestamps: false		
	});

	return ConsumoHoraFechada;
}