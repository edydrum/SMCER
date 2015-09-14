module.exports = function() {
    var controller = {};
    
    controller.list = function(req, res) {
    	var user = new Object();
    	user.users = users;
        res.json(user);
    };
    
    controller.get = function(req, res) {
        var iduser = req.params.id;
        var user = users.filter(function(user) {
            return user.id == iduser;
        })[0];
        user ? res.json(user) : res.status(404).send('user not found');
    };
    
    controller.delete = function(req, res) {
        var iduser = req.params.id;
        users = users.filter(function (user) {
            return user.id != iduser;
        });
        res.status(204).end();
    };
    
    var ID_FACTOR_INC = users.length;
    
    controller.save = function(req, res) {

        var user = req.body;

        var id = req.params.id;
        if (id !== undefined) {
            user.id = parseInt(id);
        }       

        user = user.id ? update(user) : add(user);
        res.json(user);
    };
    
    function add(userNew) { 
        userNew.id = ++ID_FACTOR_INC;
        users.push(userNew);
        return userNew;
    }
    
    function update(userUpdate) {
        users = users.map(function (user) {
            if (user.id == userUpdate.id) {
                var user = userUpdate;                
            }
            return user;
        });
        return userUpdate;
    }
    
    return controller;
};

var users = [
    {
        id : ObjectId("557c9d8492f228c160106b52"),
        login : "admin",
        name : "Vinicius",
        password : "teste",
        type : "local",
        created : ISODate("2015-06-13T21:15:35.984Z"),
        picture : "app/img/user/02.jpg",
        job : "Developer"
    }
];
