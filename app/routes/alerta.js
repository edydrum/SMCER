module.exports = function(app){

 	var alertaController = app.controllers.alerta;

	app.get('/alerta', alertaController.findAlerta);
	app.post('/alerta', alertaController.saveAlerta);
	app.put('/alerta', alertaController.updateAlerta);
	app.delete('/alerta/:email', alertaController.deleteAlerta);
}