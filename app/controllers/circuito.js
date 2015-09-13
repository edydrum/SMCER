
module.exports =  function (app){ 
	
	var Circuito = app.models.circuito; 

	var controller = {
		 findCircuitoById: function (req, resp){
			Circuito.findAll({
			  	where: { idCircuito: req.body.idCircuito }
			})
			.then(function (success) {
				resp.json(success);
			}, function (error){
				resp.status(500).end();
				return console.error(error);
			})
		}, 
		listCircuitos: function (req, resp){
			Circuito.findAll()
			.then(function (success) {
				resp.json(success);
			}, function (error){
				resp.status(500).end();
				return console.error(error);
			})
		}, 
		deleteCircuitoById: function (req, resp) {
			Circuito.destroy({ idCircuito: req.body.idCircuito })
			.then(function (success){
				resp.status(204).end();
				console.log('success');
			}, function (error){
				resp.status(500).end();
				return console.error(error);
			})
		}, 
		updateCircuitoById: function (req, resp) {
			Circuito.update({ nomeCircuito: req.body.nomeCircuito }, 
			{
				where: { idCircuito: req.body.idCircuito }
			})
			.then(function (success){
				console.log('success', success);
				resp.status(204).end();
			}, function (error){
				resp.status(500).end();
				return console.error(error);
			})
		}, 	
		saveCircuito: function (req, resp){
			Circuito.build({ nomeCircuito: req.body.nomeCircuito })
			.save()
			.then(function (success){
				console.log('success', success)
				resp.json(success);
			}, function (error){
				resp.status(500).end();
				return console.error(error);
			})
		}
	};
	return controller;
}