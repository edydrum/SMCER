module.exports = function(app){

 	var instantaneo = app.controllers.instantaneo;

	app.get('/instantaneo', instantaneo.getAll);
}