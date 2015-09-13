module.exports =  function (app){ 

	var ConsumoHora = app.models.consumoHora; 

	var controller = {
		getConsumoHora: function (req, resp){
			ConsumoHora.findAll()
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