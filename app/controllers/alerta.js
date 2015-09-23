
module.exports =  function (app){ 

	var Alerta = app.models.alerta; 

	var controller = {
		 findAlerta: function (req, resp){
			Alerta.findOne().
			then(function (success) {
				resp.json(success);
				resp.status(204).end();
			}, function (error){
				resp.status(500).end();
				return console.error(error);
			})
		}, 

		saveAlerta: function (req, resp){
			var alerta = {
				email: req.body.email
				, potencia: req.body.potencia
				, habilitado: req.body.habilitado
			};
			Alerta.build(alerta)
			.save()
			.then(function (success){
				resp.json(success);
				resp.status(204).end();
			}, function (error){
				resp.status(500).end();
				return console.error(error);
			})
		}, 
		updateAlerta: function (req, resp){
			var alerta = {
				potencia: req.body.potencia
				, habilitado: req.body.habilitado
			};		
			Alerta.update( alerta, 
				{ where: { email: req.body.email } }
			)
			.then(function (success){
				resp.json(success);
				resp.status(204).end();
			}, function (error){
				resp.status(500).end();
				return console.error(error);
			})
		},
		deleteAlerta: function (req, resp){
			Alerta.destroy( { where: 
				{ email: req.params.email } 
			} )
			.then(function (success){
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