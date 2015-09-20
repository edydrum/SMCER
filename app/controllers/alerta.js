
module.exports =  function (app){ 

	var Alerta = app.models.alerta; 

	var controller = {
		 findAlerta: function (req, resp){
			Alerta.findAll().
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
				emailAlerta: req.body.email
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
				{ where: { emailAlerta: req.body.email } }
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
			Alerta.destroy( { emailAlerta: req.body.emailAlerta } )
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