var connection = require('../../configs/database');
var Sequelize = require('sequelize');

module.exports = function() { 

	var ConsumoInstantaneo = connection.define('consumo_instantaneo', {
		horaConsumoInstantaneo: {
			type: Sequelize.DATE
			, field: 'hr_consumo_instantaneo'
			, unique: true
			, primaryKey: true
		}, 
		potenciaConsumoInstantaneo: {
			type: Sequelize.DECIMAL(5,5)
			, field: 'potencia_consumo_instantaneo'
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
		tableName: 'consumo_instantaneo'
		, timestamps: false		
	});

	return ConsumoInstantaneo;
}