// Resource of User
angular.module('SMCERApp').factory('User', function($resource) {
    return $resource('/usuarios/:id', {id: '@id'}, {
    });
});

// Resource of Login
angular.module('SMCERApp').factory('Auth', function($resource) {
    return $resource('/auth', null, {
        'login' : {method : 'POST'}
    });
});

// Resource of Alerts
angular.module('SMCERApp').factory('Alert', function($resource) {
    return $resource('/alertas/:id', {id: '@id'}, { 
    });
});

// Resource of Circuito
angular.module('SMCERApp').factory('Circuito', function($resource) {
    return $resource('/circuitos', { 
    });
});