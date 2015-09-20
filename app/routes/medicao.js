module.exports = function(app){

 	var medicaoController = app.controllers.medicao;

	app.get('/getMedicao', medicaoController.getMedicao);
}