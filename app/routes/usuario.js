module.exports = function(app){

 	var usuarioController = app.controllers.usuario;

	app.get('/usuario/:id', usuarioController.findUsuarioById);
	app.get('/usuario', usuarioController.listUsuarios);
	app.post('/usuario', usuarioController.saveUsuario);
	app.put('/usuario/:id', usuarioController.updateUsuarioById);
	app.delete('/usuario/:id', usuarioController.deleteUsuarioById);
}