var passport = require('passport');

var GitHubStrategy = require('passport-github').Strategy;

var githubCallback = 'http://localhost:3000/auth/github/callback';

var LocalStrategy = require('passport-local').Strategy

var app = require('./express')();

module.exports = function() {

    var User = app.models.usuario;
    
    passport.use(new GitHubStrategy({
        clientID: '5d73e9739607d19c9ddc',
        clientSecret: '542bdd2d1de68a782fd912e46c9c274b7fbe4ee5',
        callbackURL: githubCallback
    }, function(accessToken, refreshToken, profile, done) {
        
        User.findOrCreate({"nome" : profile.username, "senha" : "null"})
        .success(function(user, created){
            return done(null, User);
        })
        .error(function(err) {
           return done(err);
        });
        
    }));

    passport.use(new LocalStrategy({
        usernameField : 'login',
        passwordField : 'password'
    },
    function(login, password, done) {
          
        console.log("Login -> User: "+login+", Password: "+password);

        User.findOne( { where: { nome: login, senha : password } })
        .then(function (success){
          console.log('Usuário autenticado com sucesso!');
          return done(null, success);
        }, function (error){
            console.error("Erro no login: "+error);
            return done(error);
        });

    }));
    
    passport.serializeUser(function(user, done) {
        done(null, user);
    });
    
    passport.deserializeUser(function(user, done) {
        done(null, user);
    });
    
};