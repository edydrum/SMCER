angular.module('merkadorApp').factory('unauthorizedInterceptor', 
    function($location, $q) {
        var interceptor = {
            responseError : function(resposta) {
                if (resposta.status == 401) {
                    $location.path('/login/signin');
                }
                return $q.reject(resposta);
            }
        }
        return interceptor;
    }
);