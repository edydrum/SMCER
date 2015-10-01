'use strict';

app.controller('AuthCtrl', ["$rootScope", "$scope", "$state", "$localStorage", "ValidatorService", "Auth","SweetAlert", 
    function ($rootScope, $scope, $state, $localStorage, ValidatorService, Auth, SweetAlert) {

    $scope.init = function () { 
        if ($rootScope.user) {
            redirectApp();
        } else {
            Auth.query(
                function(res) {
                    console.log(JSON.stringify(res));
                    redirectApp();
                }, function(err) {
                    console.log('Auth.query: '+JSON.stringify(err))
                });
        }
            
        $scope.user = new Object();
    };

    $scope.init();

    $scope.login = function (Form) {

        if (ValidatorService.validateForm(Form, false)) {

            Auth.login($scope.user,
                function user(user) {
                    console.log("User retornado:", user);
                    $rootScope.user = user;
                    redirectApp();
                },
                function (erro) {
                    console.log(erro);
                    delete $scope.user.password;
                    SweetAlert.swal("Dados incorretos", "Usuário ou senha informados estão incorretos", "error");
                });

        }

    };
    
    function redirectApp() {
        $state.go('app.dashboard');
    }

}]);