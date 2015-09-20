module.exports = function(app){

 	var usuarioController = app.controllers.usuario;

	app.get('/usuario', usuarioController.getUsuario);
	app.post('/usuario', usuarioController.saveUsuario);
	app.put('/usuario', usuarioController.updateUsuario);
}