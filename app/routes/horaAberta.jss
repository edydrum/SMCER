module.exports = function(app){

 	var horaAberta = app.controllers.horaAberta;

	app.get('/horaAberta', horaAberta.findAllHoraAberta);
}