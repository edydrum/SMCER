
module.exports =  function (app){ 

	var Alerta = app.models.alerta; 

	var controller = {
		 findAlertaById: function (req, resp){
			Alerta.findAll({
			  	where: {
			    	idAlerta: req.body.idAlerta
			  	}
			}).then(function (success) {
				resp.json(success);
				resp.status(204).end();
			}, function (error){
				resp.status(500).end();
				return console.error(error);
			})
		}, 
		listAlertas: function (req, resp){
			Alerta.findAll()
			.then(function (success) {
				resp.json(success);
				resp.status(204).end();
			}, function (error){
				resp.status(500).end();
				return console.error(error);
			})
		}, 
		saveAlerta: function (req, resp){
			var alerta = {
				nomeAlerta: req.body.nome
				, valorAlerta: req.body.valor
				, taxaAlerta: req.body.taxa
				, idUsuario: req.body.idUsuarioLogado
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
		updateAlertaById: function (req, resp){
			var alerta = {
				nomeAlerta: req.body.nome
				, valorAlerta: req.body.valor
				, taxaAlerta: req.body.taxa
				, idUsuario: req.body.idUsuarioLogado
			};			
			Alerta.update( alerta, 
				{ 
					where:{ idAlerta: req.body.alerta.idAlerta } 
				}
			)
			.then(function (success){
				resp.json(success);
				resp.status(204).end();
			}, function (error){
				resp.status(500).end();
				return console.error(error);
			})
		},
		deleteAlertaById: function (req, resp){
			Alerta.destroy(
				{ idAlerta: req.body.idAlerta }
			)
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