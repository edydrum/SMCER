describe("ContatoController", function() {
    
    var $scope, $httpBackend;
    
    // Carrega o Angular-Mocks para carregar o módulo Contatooh (main.js)
    beforeEach(function() {
        module('contatooh');
        inject(function($injector, _$httpBackend_) {
            $scope = $injector.get('$rootScope').$new();
            $httpBackend = _$httpBackend_;
            $httpBackend.when('GET', '/contatos/1').respond({_id : '1'});
            $httpBackend.when('GET', '/contatos').respond([{}]);
        });
    });
    
    // Spec
    it("Deve criar um Contato vazio quando nenhum parâmetro de rota for passado", 
       inject(function($controller) {
            $controller('ContatoController', {"$scope" : $scope});
            expect($scope.contato._id).toBeUndefined();
       })
    );
    
    // Spec
    it("Deve preencher um contato quando um parametro id com o valor for passado", 
       inject(function($controller) {
            $controller('ContatoController', 
                        {
                            "$routeParams" : {contatoId : 1},
                            "$scope" : $scope
                        });
            $httpBackend.flush();
            expect($scope.contato._id).toBeDefined();
       })
    );
});