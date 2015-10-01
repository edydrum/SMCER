module.exports = function(app){

 	var horaAberta = app.controllers.horaAberta;

	app.route('/horaAberta')
		.get(horaAberta.getAll);

	app.route('/horaAberta/:dataInicial/:dataFinal')
		.get(horaAberta.getIntervalHoraAberta);
}