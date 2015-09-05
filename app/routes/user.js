//Middleware
function verificaAutenticacao(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.status('401').json('Não autorizado');
    }
}

module.exports = function(app) {
    var controller = app.controllers.user;
    
    app.route('/users')
        .get(verificaAutenticacao, controller.listUsers)        
        .put(verificaAutenticacao, controller.updateUser);
    app.route('/users/:id')
        .get(verificaAutenticacao, controller.getUser)
        .delete(verificaAutenticacao, controller.deleteUser);
    
    // Middlewares
    app.use('/', function(req, res, next) {
        console.log('middleware A');
        next();
    });
    
    app.use('/', function(req, res, next) {
        console.log('middleware B');
        next();
    });
};
