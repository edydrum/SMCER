// Resource of User
angular.module('SMCERApp').factory('User', function($resource) {
    return $resource('/usuarios/:id', null, {
        'login' : {method : 'POST'}
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
    return $resource('/alertas', { 
    	'getAll': { method: 'GET', params: {id: '@id'} }
    });
});

// Resource of Alerts
angular.module('SMCERApp').factory('AlertRemove', function($resource) {
    return $resource('/alertas/:id', {id: '@id'}, { 
    	'removeAlert': { method: 'DELETE' }
    });
});

// Resource of Alerts
angular.module('SMCERApp').factory('AlertSave', function($resource) {
    return $resource('/alertas', { 
    	'saveAlert': { method: 'POST', params: {data: '@data'} }
    });
});

// Resource of Circuito
angular.module('SMCERApp').factory('Circuito', function($resource) {
    return $resource('/circuitos', { 
    	'getAll': { method: 'GET' }
    });
});