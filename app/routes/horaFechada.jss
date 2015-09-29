module.exports = function(app){

 	var horaFechada = app.controllers.horaFechada;

	app.get('/horaFechada', horaFechada.findAllHoraFechada);
}