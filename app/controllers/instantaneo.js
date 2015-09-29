module.exports =  function (app){ 

	var Instantanea = app.models.instantanea; 

	var controller = {
		getInstantanea: function (req, resp){
			Instantanea.findOne()
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