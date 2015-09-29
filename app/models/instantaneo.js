var connection = require('../../config/database');
var Sequelize = require('sequelize');

module.exports = function() { 

	var Circuito, Instantanea;

	Circuito = connection.import(__dirname + '/circuito');

	Instantanea = connection.define('Consumo_Instantaneo', {
		hora: {
			type: Sequelize.DATE
			, field: 'hora'
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
		tableName: 'Consumo_Instantaneo'
		, timestamps: false		
	});

	Circuito.hasMany(Instantanea, {foreignKey:'idCircuito'} );
	Instantanea.belongsTo(Circuito, {foreignKey:'idCircuito'} );		

	return Instantanea;
}