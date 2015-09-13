
module.exports =  function (app){ 

	var Celular = app.models.celular; 

	var controller = {
		 findCelularById: function (req, resp){
			Celular.findAll({
			  	where: { idCelular: req.body.idCelular }
			}).then(function (success) {
			  	//console.log('success[0].dataValues', success[0].dataValues)
				resp.json(success);
				resp.status(204).end();
			}, function (error){
				resp.status(500).end();
				return console.error(error);
			})
		}, 
		listCelulares: function (req, resp){
			Celular.findAll()
			.then(function (success) {
			  	//console.log('success[0].dataValues', success[0].dataValues);
				resp.json(success);
				resp.status(204).end();
			}, function (error){
				resp.status(500).end();
				return console.error(error);
			})
		}, 
		saveCelular: function (req, resp){
			var celular = {
				numeroCelular: req.body.numeroCelular
				, idUsuario: req.body.idUsuarioLogado
			};
			Celular.build(celular)
			.save()
			.then(function (success){
			  	//console.log('success[0].dataValues', success[0].dataValues);				
				resp.json(success);
				resp.status(204).end();
			}, function (error){
				resp.status(500).end();
				return console.error(error);
			})
		}, 
		updateCelularById: function (req, resp){
			var celular = {
				numeroCelular: req.body.numeroCelular
				, idUsuario: req.body.idUsuarioLogado
			};			
			Celular.update( celular, 
				{ 
					where:{ idCelular: req.body.celular.idCelular } 
				}
			)
			.then(function (success){
			  	//console.log('success[0].dataValues', success[0].dataValues);				
				resp.json(success);
				resp.status(204).end();
			}, function (error){
				resp.status(500).end();
				return console.error(error);
			})
		},
		deleteCelularById: function (req, resp){
			Celular.destroy(
				{ idCelular: req.body.celular.idCelular }
			)
			.then(function (success){
			  	//console.log('success[0].dataValues', success[0].dataValues);				
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