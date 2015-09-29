var connection = require('../../config/database');
var Sequelize = require('sequelize');

module.exports = function() { 

	var Circuito, HoraAberta;

	Circuito = connection.import(__dirname + '/circuito');

	HoraAberta = connection.define('Consumo_Hora', {
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
		tableName: 'Consumo_Hora'
		, timestamps: false		
	});

	Circuito.hasMany(HoraAberta, {foreignKey:'idCircuito'} );
	HoraAberta.belongsTo(Circuito, {foreignKey:'idCircuito'} );

	return HoraAberta;
}