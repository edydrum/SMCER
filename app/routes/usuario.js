//Middleware
function verificaAutenticacao(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.status('401').json('Não autorizado');
    }
}

module.exports = function(app){

 	var controller = app.controllers.usuario;

	 app.route('/usuarios')
        .get(verificaAutenticacao, controller.getAll)
        .post(verificaAutenticacao, controller.saveUsuario)
    app.route('/usuarios/:id')
        .get(verificaAutenticacao, controller.getUsuario)
        //.delete(verificaAutenticacao, controller.deleteUser)
        .put(verificaAutenticacao, controller.updateUsuario);
}