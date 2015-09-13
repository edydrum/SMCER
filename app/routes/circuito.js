module.exports = function(app){

 	var circuitoController = app.controllers.circuito;

	app.get('/circuito/:id', circuitoController.findCircuitoById);
	app.get('/circuito', circuitoController.listCircuitos);
	app.post('/circuito', circuitoController.saveCircuito);
	app.put('/circuito/:id', circuitoController.updateCircuitoById);
	app.delete('/contato/:id', circuitoController.deleteCircuitoById);
}