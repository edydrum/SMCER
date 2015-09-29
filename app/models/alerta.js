var connection = require('../../config/database');
var Sequelize = require('sequelize');

module.exports = function() { 

	var Usuario, Circuito, Alerta;

	Usuario = connection.import(__dirname + '/usuario');
	Circuito = connection.import(__dirname + '/circuito');

	Alerta = connection.define('Alerta', {
		id: {
			type: Sequelize.INTEGER
			, field: 'id'
			, unique: true
			, primaryKey: true
			, autoIncrement: true 
		}, 
		nome: {
			type: Sequelize.STRING
			, field: 'nome'
		}, 
		potencia: {
			type: Sequelize.FLOAT
			, field: 'potencia'
		}, 
		habilitado: {
			type: Sequelize.BOOLEAN 
			, field: 'habilitar'
		},
		idUsuario: {
			type: Sequelize.INTEGER
			, field: 'id_usuario_fk'
			, references: {
				model: 'Usuario'
				, key: 'id'
			}
		},
		idCircuito: {
			type: Sequelize.INTEGER
			, field: 'id_circuito_fk'
			, references: {
				model: 'Circuito'
				, key: 'id'
			}
		}					
	}, 
	{ 
		tableName: 'Alerta'
		, timestamps: false		
	});

	Usuario.hasMany(Alerta, { foreignKey: 'idUsuario' } );
	Alerta.belongsTo(Usuario, { foreignKey: 'idUsuario' } );	

	Circuito.hasMany(Alerta, { foreignKey: 'idCircuito' } );
	Alerta.belongsTo(Circuito, { foreignKey: 'idCircuito' } );

	return Alerta;
}