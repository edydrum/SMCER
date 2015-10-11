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

// Resource of Grafico Hora Fechada
angular.module('SMCERApp').factory('HoraFechada', function($resource) {
    return $resource('/horaFechada/:dataInicial/:dataFinal/:circuito', 
        {dataInicial: '@dataInicial', dataFinal: '@dataFinal', circuito: '@circuito'}, {
        update: { method: 'PUT', isArray: true }        
    });
});

// Resource of Grafico Hora Aberta
angular.module('SMCERApp').factory('HoraAberta', function($resource) {
    return $resource('/horaAberta',  {
        update: { method: 'PUT', isArray: true }        
    });
});

// Resource of Grafico Instantaneo
angular.module('SMCERApp').factory('Instantaneo', function($resource) {
    return $resource('/instantaneo',  {
        update: { method: 'PUT', isArray: true }        
    });
});