module.exports =  function (app){ 

	var ConsumoHistorico = app.models.consumoHistorico; 

	var controller = {
		getConsumoHistorico: function (req, resp){
			ConsumoHistorico.findAll()
			.then(function (success) {
			  	console.log('success[0].dataValues', success[0].dataValues)
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