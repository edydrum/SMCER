// Resource of User
angular.module('SMCERApp').factory('User', function($resource) {
    return $resource('/users/:id', null, {
        'login' : {method : 'POST'}
    });
});

// Resource of Login
angular.module('SMCERApp').factory('Auth', function($resource) {
    return $resource('/auth', null, {
        'login' : {method : 'POST'}
    });
});