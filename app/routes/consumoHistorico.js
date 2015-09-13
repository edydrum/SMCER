module.exports = function(app){

 	var consumoHistoricoController = app.controllers.consumoHistorico;

	app.get('/consumoHistorico', consumoHistoricoController.getConsumoHistorico);
}