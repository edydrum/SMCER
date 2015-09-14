module.exports = function(app){

 	var consumoHoraController = app.controllers.consumoHora;

	app.get('/consumoHora', consumoHoraController.getConsumoHora);
}