
module.exports =  function (app){ 
	
	var Usuario = app.models.usuario; 
	var controller = {
		 findUsuarioById: function (req, resp){
			Usuario.findAll({
			  	where: {
			    	idUsuario: req.body.idUsuario
			  	}
			}).then(function (success) {
				usuario = success[0].dataValues;
				resp.json(usuario.nomeUsuario);
			}, function (error){
				resp.status(500).end();
				return console.error(error);
			})
		}, 
		listUsuarios: function (req, resp){
			Usuario.findAll()
			.then(function (success) {
				usuarios = success;
				resp.json(usuarios);
			}, function (error){
				resp.status(500).end();
				return console.error(error);
			})
		}, 
		deleteUsuarioById: function (req, resp) {
			Usuario.destroy({
				idUsuario: req.body.idUsuario
			})
			.then(function (success){
				resp.status(204).end();
			}, function (error){
				resp.status(500).end();
				return console.error(error);
			})
		}, 
		updateUsuarioById: function (req, resp) {
			Usuario.update({nomeUsuario: req.body.nomeUsuario}, 
				{ 
					where: { idusuario: req.body.idUsuario }
				}
			)
			.then(function (success){
				resp.status(204).end();
			}, function (error){
				resp.status(500).end();
				return console.error(error);
			})
		}, 	
		saveUsuario: function (req, resp){
			console.log('saveUsuario', req.body)
			Usuario.build({nomeUsuario: req.body.nomeUsuario})
			.save()
			.then(function (success){
				resp.json(success);
			}, function (error){
				resp.status(500).end();
				return console.error(error);
			})
		}

	};
	return controller;
}