'use strict';
/**
 * Controller for Manager User
 * Simple table with sorting and filtering on AngularJS
 */
app.controller('consult', ["$scope", "$filter", "ngTableParams", "User", function ($scope, $filter, ngTableParams, User) {    
    
    $scope.filtro = '';
    
    $scope.init = function() {
        searchUsers();        
    }
    
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