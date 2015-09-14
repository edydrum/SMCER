
module.exports =  function (app){ 

	var Email = app.models.email; 

	var controller = {
		 findEmailById: function (req, resp){
			Email.findAll({
			  	where: {
			    	idEmail: req.body.idEmail
			  	}
			}).then(function (success) {
				resp.json(success);
				resp.status(204).end();
			}, function (error){
				resp.status(500).end();
				return console.error(error);
			})
		}, 
		listEmails: function (req, resp){
			Email.findAll()
			.then(function (success) {
				resp.json(success);
				resp.status(204).end();
			}, function (error){
				resp.status(500).end();
				return console.error(error);
			})
		}, 
		saveEmail: function (req, resp){
			var email = {
				email: req.body.nomeEmail
				, idUsuario: req.body.idUsuarioLogado
			};
			console.log('********** email',email)

			Email.build(email)
			.save()
			.then(function (success){
				resp.json(success);
				resp.status(204).end();
			}, function (error){
				resp.status(500).end();
				return console.error(error);
			})
		}, 
		updateEmailById: function (req, resp){
			var email = {
				nomeEmail: req.body.nomeEmail
				, idUsuario: req.body.idUsuarioLogado
			};			
			Email.update( email, 
				{ 
					where:{ idEmail: req.body.idEmail } 
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
		deleteEmailById: function (req, resp){
			Email.destroy(
				{ idEmail: req.body.idEmail }
			)
			.then(function (success){
				resp.json(success);
				resp.status(204).end();
			}, function (error){
				resp.status(500).end();
				return console.error(error);
			})
		}, 
		listAllEmails: function (req, resp){
			console.log('********* LISTA ALL EMAILS', req.body)
			Email.find(
			{
				where: { idUsuario: req.params.id }
			})
			.then(function (success) {
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