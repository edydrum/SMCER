var connection = require('../../config/database');

module.exports =  function (app){ 

	var HoraFechada = app.models.horaFechada; 
	var Circuito = app.models.circuito;

	var controller = {
		getAll: function (req, resp){
			var _id = req.body.id;
			HoraFechada.findAll()
			.then(function (success) {
				resp.json(success);
				resp.status(204).end();
			}, function (error){
				resp.status(500).end();
				return console.error(error);
			})
		}, 
		/*  
			_id --> parametro passado no GET, é o id do circuito selecionado.
			dataInicial --> parametro passado na url (primeiro parametro) data inicio para visualização do consumo
			dataFinal --> parametro passado na url (segundo parametro) data limite para visualização do consumo
		*/
		getIntervalHoraFechada: function (req, resp){
			var _id = req.body.id,
			dataInicial = req.params.dataInicial,
			dataFinal = req.params.dataFinal;
			HoraFechada.findAll( 
				{ 
					include: [{
						model: Circuito
						, where: { idCircuito: _id }
					}],
					where: connection.and({ 
						dataHora: { $between: [dataInicial, dataFinal] } 
					})
				}
			)
			.then(function (success) {
				resp.json(success);
				resp.status(204).end();
			}, function (error){
				resp.status(500).end();
				return console.error(error);
			})
		}
	};
	return controller;
}