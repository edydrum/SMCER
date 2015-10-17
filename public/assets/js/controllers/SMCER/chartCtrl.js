'use strict';

app.controller('ChartOpenHourCtrl', ["$scope", "$state", "SweetAlert", "Circuit", "HoraFechada",
	function($scope, $state, SweetAlert, Circuit, HoraFechada) {

		$scope.grafic = {};
		$scope.circuito = {};
		$scope.circuitos = [];

		$scope.init = function() {
			searchCircuitos(function() {
				gerarGraficoInicial();
			});
			
			$scope.endDateSelect = new Date();
		}

		$scope.init();

		function gerarGraficoInicial() {

			var dataInicial = "2015/01/01" + " " + "00:00:00";
			var dataFinal = "2015/12/31" + " " + "23:59:59";

			HoraFechada.get({
					dataInicial: dataInicial,
					dataFinal: dataFinal,
					circuito: $scope.circuito.id
				},
				function(consumo) {
					$scope.grafic = consumo;
					grafico();
				},
				function(erro) {
					console.log('erro', erro);
				});
		};

		function searchCircuitos(callback) {
			Circuit.query(
				function(circuitos) {
					$scope.circuitos = circuitos;
					$scope.circuito.nome = circuitos[0].nome;
					$scope.circuito.id = circuitos[0].id;
					callback();
				},
				function(erro) {
					console.log(erro);
				});
		};

		$scope.open = function($event) {
			$event.preventDefault();
			$event.stopPropagation();
			$scope.opened = !$scope.opened;
		};
		$scope.endOpen = function($event) {
			$event.preventDefault();
			$event.stopPropagation();
			$scope.startOpened = false;
			$scope.endOpened = !$scope.endOpened;
		};
		$scope.startOpen = function($event) {
			$event.preventDefault();
			$event.stopPropagation();
			$scope.endOpened = false;
			$scope.startOpened = !$scope.startOpened;
		};

		function formatDate(data) {
			//var data = new Date();
			var dia = data.getDate();
			if (dia.toString().length == 1)
				dia = "0" + dia;
			var mes = data.getMonth() + 1;
			if (mes.toString().length == 1)
				mes = "0" + mes;
			var ano = data.getFullYear();
			return ano + "-" + mes + "-" + dia;
		};

		$scope.updateGrafic = function(circuito) {
			if ((!$scope.start || !$scope.end) || ($scope.end < $scope.start))
				return;

			if (!circuito)
				circuito = $scope.circuito;

			var dataInicial = formatDate($scope.start) + " " + "00:00:00";
			var dataFinal = formatDate($scope.end) + " " + "23:59:59";
			var circuito = circuito.id;

			HoraFechada.get({
					dataInicial: dataInicial,
					dataFinal: dataFinal,
					circuito: circuito
				},
				function(consumo) {
					$scope.grafic = consumo;
					grafico();
				},
				function(erro) {
					console.log('erro', erro);
				});
		};

		function grafico() {
			if ($scope.grafic.data.length == 0) {
				SweetAlert.swal("404 -Dados não encontrados", "Tente selecionar um outro período para visualizar o gráfico", "warning");
			}
			$scope.data = {
				labels: $scope.grafic.label,
				datasets: [{
					label: 'Potência consumida (Watts)',
					fillColor: 'rgba(184,223,234,0.2)',
					strokeColor: 'rgba(184,223,234,1)',
					pointColor: 'rgba(184,223,234,1)',
					pointStrokeColor: '#fff',
					pointHighlightFill: '#fff',
					pointHighlightStroke: 'rgba(220,220,220,1)',
					data: $scope.grafic.data
				}]
			};
		};

		$scope.options = {

			maintainAspectRatio: false,

			// Sets the chart to be responsive
			responsive: true,

			///Boolean - Whether grid lines are shown across the chart
			scaleShowGridLines: true,

			//String - Colour of the grid lines
			scaleGridLineColor: 'rgba(0,0,0,.05)',

			//Number - Width of the grid lines
			scaleGridLineWidth: 1,

			//Boolean - Whether the line is curved between points
			bezierCurve: false,

			//Number - Tension of the bezier curve between points
			bezierCurveTension: 0.4,

			//Boolean - Whether to show a dot for each point
			pointDot: true,

			//Number - Radius of each point dot in pixels
			pointDotRadius: 4,

			//Number - Pixel width of point dot stroke
			pointDotStrokeWidth: 1,

			//Number - amount extra to add to the radius to cater for hit detection outside the drawn point
			pointHitDetectionRadius: 20,

			//Boolean - Whether to show a stroke for datasets
			datasetStroke: true,

			//Number - Pixel width of dataset stroke
			datasetStrokeWidth: 2,

			//Boolean - Whether to fill the dataset with a colour
			datasetFill: true,

			// Function - on animation progress
			onAnimationProgress: function() {},

			// Function - on animation complete
			onAnimationComplete: function() {},

			//String - A legend template
			legendTemplate: '<ul class="tc-chart-js-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
		};

	}
]);

app.controller('ChartNowCtrl', ["$scope", "Instantaneo", function($scope, Instantaneo) {

	$scope.init = function() {

		$scope.data0 = new Object();
		$scope.data0.labels = new Array();

		$scope.data1 = new Object();
		$scope.data1.labels = new Array();

		$scope.data2 = new Object();
		$scope.data2.labels = new Array();

		$scope.data3 = new Object();
		$scope.data3.labels = new Array();

		$scope.data4 = new Object();
		$scope.data4.labels = new Array();

		$scope.data5 = new Object();
		$scope.data5.labels = new Array();

		loadData();

		setInterval(function () {
			loadData();

		}, 10000);		

	};

	function loadData() {
		Instantaneo.query(
				function(data) {

					if ($scope.data.labels.length > 7) {
						$scope.data.labels.splice(0, 1);
						$scope.data.datasets[0].data.splice(0, 1);
						$scope.data.datasets[1].data.splice(0, 1);
						$scope.data.datasets[2].data.splice(0, 1);
						$scope.data.datasets[3].data.splice(0, 1);
						$scope.data.datasets[4].data.splice(0, 1);
						$scope.data.datasets[5].data.splice(0, 1);
					}

					$scope.data.labels.push(data[0].hora);

					$scope.data.datasets[0].data.push(data[0].potencia);
					$scope.data0.labels.push(data[0].hora);
					$scope.data0.datasets = $scope.data.datasets[0];

					$scope.data.datasets[1].data.push(data[1].potencia);
					$scope.data1.labels.push(data[1].hora);
					$scope.data1.datasets = $scope.data.datasets[1];

					$scope.data.datasets[2].data.push(data[2].potencia);
					$scope.data2.labels.push(data[2].hora);
					$scope.data2.datasets = $scope.data.datasets[2];

					$scope.data.datasets[3].data.push(data[3].potencia);			
					$scope.data3.labels.push(data[3].hora);
					$scope.data3.datasets = $scope.data.datasets[3];

					$scope.data.datasets[4].data.push(data[4].potencia);
					$scope.data4.labels.push(data[4].hora);
					$scope.data4.datasets = $scope.data.datasets[4];

					$scope.data.datasets[5].data.push(data[5].potencia);
					$scope.data5.labels.push(data[5].hora);
					$scope.data5.datasets = $scope.data.datasets[5];	
					
				},
				function(erro) {
					console.log('erro', erro);
				}
			);
	};

	$scope.init();

	$scope.data = {
		labels: [],
		datasets: [{
			label: 'Circuito 1',
			fillColor: 'rgba(220,220,220,0.2)',
			strokeColor: 'rgba(220,220,220,1)',
			pointColor: 'rgba(220,220,220,1)',
			pointStrokeColor: '#fff',
			pointHighlightFill: '#fff',
			pointHighlightStroke: 'rgba(220,220,220,1)',
			data: []
		}, {
			label: 'Circuito 2',
			fillColor: 'rgba(151,187,205,0.2)',
			strokeColor: 'rgba(151,187,205,1)',
			pointColor: 'rgba(151,187,205,1)',
			pointStrokeColor: '#fff',
			pointHighlightFill: '#fff',
			pointHighlightStroke: 'rgba(151,187,205,1)',
			data: []
		}, {
			label: 'Circuito 3',
			fillColor: 'rgba(220,220,220,0.2)',
			strokeColor: 'rgba(220,220,220,1)',
			pointColor: 'rgba(220,220,220,1)',
			pointStrokeColor: '#fff',
			pointHighlightFill: '#fff',
			pointHighlightStroke: 'rgba(220,220,220,1)',
			data: []
		}, {
			label: 'Circuito 4',
			fillColor: 'rgba(151,187,205,0.2)',
			strokeColor: 'rgba(151,187,205,1)',
			pointColor: 'rgba(151,187,205,1)',
			pointStrokeColor: '#fff',
			pointHighlightFill: '#fff',
			pointHighlightStroke: 'rgba(151,187,205,1)',
			data: []
		}, {
			label: 'Circuito 5',
			fillColor: 'rgba(220,220,220,0.2)',
			strokeColor: 'rgba(220,220,220,1)',
			pointColor: 'rgba(220,220,220,1)',
			pointStrokeColor: '#fff',
			pointHighlightFill: '#fff',
			pointHighlightStroke: 'rgba(220,220,220,1)',
			data: []
		}, {
			label: 'Circuito 6',
			fillColor: 'rgba(151,187,205,0.2)',
			strokeColor: 'rgba(151,187,205,1)',
			pointColor: 'rgba(151,187,205,1)',
			pointStrokeColor: '#fff',
			pointHighlightFill: '#fff',
			pointHighlightStroke: 'rgba(151,187,205,1)',
			data: []
		}]
	};

	$scope.options = {
		// Sets the chart to be responsive
		responsive: true,

		///Boolean - Whether grid lines are shown across the chart
		scaleShowGridLines: true,

		//String - Colour of the grid lines
		scaleGridLineColor: 'rgba(0,0,0,.05)',

		//Number - Width of the grid lines
		scaleGridLineWidth: 1,

		//Boolean - Whether the line is curved between points
		bezierCurve: true,

		//Number - Tension of the bezier curve between points
		bezierCurveTension: 0.4,

		//Boolean - Whether to show a dot for each point
		pointDot: true,

		//Number - Radius of each point dot in pixels
		pointDotRadius: 4,

		//Number - Pixel width of point dot stroke
		pointDotStrokeWidth: 1,

		//Number - amount extra to add to the radius to cater for hit detection outside the drawn point
		pointHitDetectionRadius: 20,

		//Boolean - Whether to show a stroke for datasets
		datasetStroke: true,

		//Number - Pixel width of dataset stroke
		datasetStrokeWidth: 2,

		//Boolean - Whether to fill the dataset with a colour
		datasetFill: true,

		// Function - on animation progress
		onAnimationProgress: function() {},

		// Function - on animation complete
		onAnimationComplete: function() {},

		//String - A legend template
		legendTemplate: '<ul class="tc-chart-js-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
	};

}]);