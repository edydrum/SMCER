module.exports = function(app){

 	var mediaHoraController = app.controllers.mediaHora;

	app.get('/getMediaHora', mediaHoraController.getMediaHora);
}