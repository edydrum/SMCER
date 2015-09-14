module.exports = function(app){

 	var consumoInstantaneoController = app.controllers.consumoInstantaneo;

	app.get('/consumoInstantaneo', consumoInstantaneoController.getConsumoInstantaneo);
}