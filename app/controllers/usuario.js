
module.exports =  function (app){ 
	
	var Usuario = app.models.usuario;

	var controller = {
		getUsuario: function (req, resp){
			Usuario.findOne( { where: { email: req.body.email } })
			.then(function (success){
				resp.json(sucess);
			}, function (error){
				resp.status(500).end();
				return console.error(error);
			})
		},
		saveUsuario: function (req, resp){
			var usuario = {
				nome: req.body.nome
				, senha: req.body.senha
				, email: req.body.email
			};
			Usuario.build( usuario )
			.save()
			.then(function (success){
				resp.json(success);
			}, function (error){
				resp.status(500).end();
				return console.error(error);
			})
		},
		updateUsuario: function (req, resp) {
			var usuario = {
				nome: req.body.nome
				, senha: req.body.senha
				, email: req.body.email
			};
			Usuario.update(usuario, { where: { idUsuario: req.body.id } } )
			.then(function (success){
				resp.status(204).end();
			}, function (error){
				resp.status(500).end();
				return console.error(error);
			})
		}
	};
	return controller;
}