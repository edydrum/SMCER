module.exports = function(app){

 	var instantaneaController = app.controllers.instantanea;

	app.get('/getInstantanea', instantaneaController.getInstantanea);
}