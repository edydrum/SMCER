module.exports =  function (app){ 

	var Medicao = app.models.medicao; 

	var controller = {
		getMedicao: function (req, resp){
			Medicao.findAll()
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