module.exports =  function (app){ 

	var ConsumoInstantaneo = app.models.consumoInstantaneo; 

	var controller = {
		getConsumoInstantaneo: function (req, resp){
			console.log('************* getConsumoInstantaneo', req)
			ConsumoInstantaneo.findAll()
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