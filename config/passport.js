var mongoose = require('mongoose');

var passport = require('passport');

var GitHubStrategy = require('passport-github').Strategy;

var config = require('./config')();

var githubCallback = 'http://' + config.domain + ':' + config.port + '/auth/github/callback';

var LocalStrategy = require('passport-local').Strategy

module.exports = function() {
    
    var User = mongoose.model('user');
    
    passport.use(new GitHubStrategy({
        clientID: config.clientID,
        clientSecret: config.clientSecret,
        callbackURL: githubCallback
    }, function(accessToken, refreshToken, profile, done) {
        
        User.findOrCreate(
            {"login" : profile.username,
            "name" : profile.username,
            "type" : "Github",
            "password" : "null"},
            function(erro, User) {
                if (erro) {
                    console.log("Retorno Mongoose: "+erro);
                    return done(erro);
                }
                return done(null, User);
            }
        );
        
    }));

    passport.use(new LocalStrategy({
        usernameField : 'login',
        passwordField : 'password'
    },
    function(login, password, done) {
          
        console.log("Login -> User: "+login+", Password: "+password);
        
        User.find()
        .select('name type login')
            .where('login').equals(login)
            .where('password').equals(password)
        .exec().then(
            function(user) {
                if (user.length == 1) {
                    console.log('Usuário autenticado com sucesso!');
                    return done(null, user[0]);
                } else {
                    console.log('Falha na autenticação. Informações incorretas.!');
                    return done(null);
                }                
            }, 
            function(erro) {
                console.error("Erro no login: "+erro);
                return done(err);
            }
        );
    }));
    
    passport.serializeUser(function(User, done) {
        done(null, User._id);
    });
    
    passport.deserializeUser(function(id, done) {
        User.findById(id).exec()
        .then(function(User) {
            done(null, User);
        });
    });
    
};