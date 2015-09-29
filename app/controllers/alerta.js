
module.exports =  function (app){ 

	var Alerta = app.models.alerta; 
	var Usuario = app.models.usuario; 
	var Circuito = app.models.circuito; 

	var controller = {
		 getAll: function (req, resp){
			var _id = req.params.idUser;
			Alerta.findAll( 
				{ 	
					include: [{
						model: Usuario
						, where: { idUsuario: _id }
					}, 
					{ model: Circuito }]
				}
			)
			.then(function (success) {
				var returN = success;
				if( !(Object.prototype.toString.call(success) === '[object Array]') ) {
					returN = new Array();
					returN.push(success);
				}
				resp.json(returN);
				resp.status(204).end();
			}, function (error){
				resp.status(500).end();
				return console.error(error);
			})
		}, 		
		getAlerta: function (req, resp){
			Alerta.findOne( { where: { id: req.params.id } } )
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
				potencia: req.body.alerta.potencia
				, habilitado: req.body.alerta.habilitado
				, name: req.body.alerta.name
				, idCircuito: req.body.circuito.idCircuito
				, idUsuario: req.body.usuario.idUsuario
			};
			Alerta.build( alerta )
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
				potencia: req.body.alerta.potencia
				, habilitado: req.body.alerta.habilitado
				, name: req.body.alerta.name
				, idCircuito: req.body.circuito.idCircuito
				, idUsuario: req.body.usuario.idUsuario
			};	
			Alerta.update( alerta, { where: { id: req.params.id } } )
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
				{ id: req.params.id } 
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