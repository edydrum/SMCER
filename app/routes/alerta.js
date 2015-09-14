module.exports = function(app){

 	var alertaController = app.controllers.alerta;

	app.get('/alerta/:id', alertaController.findAlertaById);
	app.get('/alerta', alertaController.listAlertas);
	app.post('/alerta', alertaController.saveAlerta);
	app.put('/alerta/:id', alertaController.updateAlertaById);
	app.delete('/alerta/:id', alertaController.deleteAlertaById);
}