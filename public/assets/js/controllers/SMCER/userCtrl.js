'use strict';
/**
 * Controller for Manager User
 * Simple table with sorting and filtering on AngularJS
 */
app.controller('userCtrlConsult', ["$scope", "$filter", "ngTableParams", "User", function ($scope, $filter, ngTableParams, User) {    
    
    $scope.filtro = '';
    
    $scope.init = function() {
        searchUsers();
    };
    
    $scope.init();
    
    function searchUsers() {
        User.query(
            function(users) {
                $scope.users = users;
                $scope.tableParams = createTable($scope.users);
            }, 
            function(erro) {
                console.log(erro);                               
            }
        );
    }
    
    function createTable(data) {
        return new ngTableParams({
            page: 1, // show first page
            count: 10 // count per page
        }, {
            total: data.length, // length of data
            getData: function ($defer, params) {
                // use build-in angular filter
                var orderedData = params.sorting() ? $filter('orderBy')(data, params.orderBy()) : data;
                $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
        }
        });
    }
    
}]);

app.controller('userCtrlSave', ["$scope", "User", function ($scope, User) {
    
    $scope.save = function (Form) {

        if (ValidatorService.validateForm(Form, false)) {
            
            if ($scope.idUpdate == undefined) {
                
                User.login($scope.user,
                function user(user) {
                    console.log("User retornado: "+user);
                    $rootScope.user = user;
                    redirectApp();
                },
                function (erro) {
                    console.log(erro);
                    delete $scope.user.password;
                    SweetAlert.swal("Dados incorretos", "Usuário ou senha informados estão incorretos", "error");
                });
                
            }            

        }

    };
    
    function redirectApp() {
        $state.go('app.dashboard');
    }
    
}]);