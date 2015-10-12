module.exports = function(app) {
    app.get('/', function(req, res) {
    	console.log('indexjs', req.user)
        var email = '';
        if (req.user) {
            email = req.user.email;
        }
        res.render('index', {"usuarioLogado" : email}); 
    });
};