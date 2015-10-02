'use strict';

app.controller('AlertListCtrl', ["$scope", "$state", "$filter", "popupService", "ngTableParams", "SweetAlert", "Alert", 
    function($scope, $state, $filter, popupService, ngTableParams, SweetAlert, Alert){

    console.log('AlertListCtrl');
    $scope.filtro = '';
    
    $scope.init = function() {
        searchAlerts();
    };
    
    $scope.init();

    function searchAlerts() {       
        $scope.alerts = Alert.query(
            function (alerts){
                for (var i = 0; i < alerts.length; i++) {
                    $scope.alerts[i].circuito = alerts[i].circuito.nome;
                };
                $scope.tableParams = createTable($scope.alerts);
            }
        );
    };

    function createTable(data) {
        return new ngTableParams({
            page: 1, 
            count: 10 
        }, {
            total: data.length, 
            getData: function ($defer, params) {
                var orderedData = params.sorting() ? $filter('orderBy')(data, params.orderBy()) : data;
                $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
            }
        });
    };    

    $scope.deleteAlert = function(alert){
        alert.$delete({ id: alert.id }, 
            function(){
                SweetAlert.swal("Sucesso", "Alerta excluido com sucesso", "success");
            }
        );
    };

}]);
app.controller('AlertCreateCtrl', ["$scope", "$rootScope", "$state", "$stateParams", "Alert", "Circuito", "SweetAlert",
    function($scope, $rootScope, $state, $stateParams, Alert, Circuito, SweetAlert){

    console.log('AlertCreateCtrl');
    $scope.init = function(){
        $scope.alert = new Alert();
        searchCircuitos();
    }

    $scope.init();

    function searchCircuitos() {
        Circuito.query(   
            function(circuitos) {
                $scope.circuitos = circuitos;
                $scope.alert.circuito = circuitos[0];
            }, 
            function(erro) {
                console.log(erro);                               
            }
        );
    };      

    $scope.addAlert = function(){
        $scope.alert.usuario = {
            id: 1
        };    
        $scope.alert.$save(
            function (alert){
                console.log("Alert retornado", alert);
                $state.go('app.manager.alerts');
        }, function (erro){
                console.log(erro);
                SweetAlert.swal("Ocorreu um erro", "Alerta não foi criado", "error");
        });
    }

}]);
app.controller('AlertEditCtrl', ["$scope", "$rootScope", "$state", "$stateParams", "Alert", "Circuito", "SweetAlert",
    function($scope, $rootScope, $state, $stateParams, Alert, Circuito, SweetAlert){

    console.log('AlertEditCtrl');
    $scope.init = function(){
        searchCircuitos();
        console.log('stateId', $stateParams.id);
        $scope.alert = Alert.get( { id: $stateParams.id } );
        console.log('$scope.alert', $scope.alert);
    }

    $scope.init();

    function searchCircuitos() {
        Circuito.query(   
            function(circuitos) {
                $scope.circuitos = circuitos;
            }, 
            function(erro) {
                console.log(erro);                               
            }
        );
    };   

    $scope.updateAlert = function() {
        $scope.alert.usuario = {
            id: 1
        };
        $scope.alert.$update({id: $scope.alert.id},
            function (alert){
                //console.log("Alert retornado", alert);
                $state.go('app.manager.alerts');
        }, function (erro){
                console.log(erro);
                SweetAlert.swal("Dados incorretos", "Verifique os dados digitados", "error");
        });        
    };

}]);