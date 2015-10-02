// Resource of User
angular.module('SMCERApp').factory('User', function($resource) {
    return $resource('/usuarios/:id', {id: '@id'}, {
        update: { method: 'PUT', isArray: true }
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
    return $resource('/alertas/:id', {id:'@id'},{
        update: { method: 'PUT', isArray: true }
    });
});    

// Resource of Circuito
angular.module('SMCERApp').factory('Circuit', function($resource) {
    return $resource('/circuitos/:id', {id: '@id'}, {
        update: { method: 'PUT', isArray: true }        
    });
});