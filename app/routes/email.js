module.exports = function(app){

 	var emailController = app.controllers.email;

	app.get('/email/:id', emailController.findEmailById);
	app.get('/email', emailController.listEmails);
	app.get('/listAllEmails/:id', emailController.listAllEmails);
	app.post('/email', emailController.saveEmail);
	app.put('/email/:id', emailController.updateEmailById); 
	app.delete('/email/:id', emailController.deleteEmailById);
}