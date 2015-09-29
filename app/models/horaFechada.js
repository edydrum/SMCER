var connection = require('../../config/database');
var Sequelize = require('sequelize');

module.exports = function() { 

	var Circuito, HoraFechada;

	Circuito = connection.import(__dirname + '/circuito');

	HoraFechada = connection.define('Consumo_Hora_Fechada', {
		dataHora: {
			type: Sequelize.DATE
			, field: 'data_hora'
			, primaryKey: true
		},
		potencia: {
			type: Sequelize.FLOAT
			, field: 'potencia'
		},
		idCircuito: {
			type: Sequelize.INTEGER
			, field: 'id_circuito_fk'
			, primaryKey: true
			, references: {
				model: 'Circuito'
				, key: 'id'
			}
		}		
	}, 
	{ 
		tableName: 'Consumo_Hora_Fechada'
		, timestamps: false		
	});

	Circuito.hasMany(HoraFechada, {foreignKey:'idCircuito'} );
	HoraFechada.belongsTo(Circuito, {foreignKey:'idCircuito'} );	

	return HoraFechada;
}