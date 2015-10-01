'use strict';
/**
 * Controller for Manager Alert
 * Simple table with sorting and filtering on AngularJS
 */
app.controller('alertCtrlConsult', ["$scope", "$filter","$rootScope", "$state", "ngTableParams", "Alert",
    function ($scope, $filter, $rootScope, $state, ngTableParams, Alert) {    
    
    $scope.filtro = '';
    
    $scope.init = function() {
        searchAlerts();
    };
    
    $scope.init();

    $scope.removeAlert = function(id) {
        Alert.delete( { id: id },  
            function(alerts) {
                $scope.alerts.splice(id, 1);
                $scope.tableParams = createTable($scope.alerts);
            }, 
            function(erro) {
                console.log(erro);                               
            }
        );
    };
    
    function searchAlerts() {
        Alert.query( { id: 1 },  
            function(alerts) {
                $scope.alerts = alerts;
                for (var i = 0; i < alerts.length; i++) {
                    $scope.alerts[i].circuito = alerts[i].circuito.nome;
                };
                $scope.tableParams = createTable($scope.alerts);
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
    };

    function redirectApp() {
        $state.go('app.manager.alerts');
    }
    
}]);

app.controller('alertCtrlSave', ["$scope", "$rootScope", "$state", "Alert", "Circuito", "ValidatorService", "SweetAlert",
  function ($scope, $rootScope, $state, Alert, Circuito, ValidatorService, SweetAlert) {
    
    $scope.alert = {};

    $scope.init = function(){
        searchCircuitos();
    }

    $scope.init();

    function searchCircuitos() {
        Circuito.query(   
            function(circuitos) {
                console.log('SERACHCIRCUITOS', circuitos);
                $scope.circuitos = circuitos;
            }, 
            function(erro) {
                console.log(erro);                               
            }
        );
    };    

    $scope.save = function (Form) {

        if (ValidatorService.validateForm(Form, false)) {
            if ($scope.idUpdate == undefined) {
                var data = {
                    alerta : $scope.alert, 
                    circuito : {
                        idCircuito : $scope.alert.circuito.id
                    }, 
                    usuario: {
                        idUsuario : $rootScope.user.id
                    }
                };
                Alert.save(data,
                    function alert(alert) {
                        console.log("Alert retornado: " + alert);
                        $rootScope.alert = alert;
                        $scope.alert = {};
                        redirectApp();
                    },
                    function (erro) {
                        console.log(erro);
                        SweetAlert.swal("Dados incorretos", "Verifique os dados digitados", "error");
                    }
                );
            }            

        }

    };
    
    function redirectApp() {
        $state.go('app.manager.alerts');
    }
    
}]);