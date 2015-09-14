module.exports = function(app){

 	var celularController = app.controllers.celular;

	app.get('/celular/:id', celularController.findCelularById);
	app.get('/celular', celularController.listCelulares);
	app.post('/celular', celularController.saveCelular);
	app.put('/celular/:id', celularController.updateCelularById);
	app.delete('/celular/:id', celularController.deleteCelularById);
}