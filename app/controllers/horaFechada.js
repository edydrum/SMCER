module.exports =  function (app){ 

	var MediaHora = app.models.mediaHora; 

	var controller = {
		getMediaHora: function (req, resp){
			MediaHora.findAll()
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