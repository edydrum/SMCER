module.exports = function(app){

 	var consumoHoraFechadaController = app.controllers.consumoHoraFechada;

	app.get('/consumoHoraFechada', consumoHoraFechadaController.getConsumoHoraFechada);
}