// Resolve o problema de Query-Selectors
var sanitize = require('mongo-sanitize');

module.exports = function(app) {
    
    var User = app.models.user;
    
    var controller = {};

    controller.listUsers = function(req, res) {
        User.find()
        .select('name job picture created')
        .exec().then(
            function(contatos) {
                res.json(contatos);
            }, 
            function(erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    };
    
    controller.getUser = function(req, res) {
        var _id = sanitize(req.params.id);
        User.findById(_id).exec()
        .then(
            function(user) {
                if (!user) throw new Error("User not found");
                res.json(contato);
            },
            function(erro) {
                console.error(erro);
                res.status(404).json(erro);
            }
        );
    };
    
    controller.deleteUser = function(req, res) {
        var _id = sanitize(req.params.id);
        console.log("Remove : "+_id);
        User.remove({"_id" : _id}).exec()
        .then(
            function() {
                res.send(204).end();
            },
            function(erro) {
                return console.error(erro);
            }
        );
    };    
    
    controller.updateUser = function(req, res) {
        var _id = sanitize(req.body._id);
        
        /*
        // Evitando o Document Replace e inserção de dados em campos que não devem ser recebidos do cliente
        var dados = {
            "nome" : req.body.nome,
            "email" : req.body.email,
            "emergencia" : req.body.emergencia || null
        } */
        
        //req.body.emergencia = req.body.emergencia || null;
        
        User.findByIdAndUpdate(_id, req.body).exec()
        .then(
            function(contato) {
                res.json(contato);
            },
            function(erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    };
    
    return controller;
};