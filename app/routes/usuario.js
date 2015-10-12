//Middleware
function verificaAutenticacao(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.status('401').json('Não autorizado');
    }
}

module.exports = function(app){

 	var usuario = app.controllers.usuario;

	 app.route('/usuarios')
        .get(verificaAutenticacao, usuario.getAll)
        .post(verificaAutenticacao, usuario.saveUsuario);
        
    app.route('/usuarios/:id')
        .get(verificaAutenticacao, usuario.getUsuario)
        .put(verificaAutenticacao, usuario.updateUsuario)
        .delete(verificaAutenticacao, usuario.deleteUsuario);
    
    app.route('/usuarioLogado/:nome')
        .get(verificaAutenticacao, usuario.getUsuarioByNome);
}