'use strict';

app.controller('ChartOpenHourCtrl', ["$scope", "$state", "SweetAlert", "Circuit", "HoraFechada",
	function($scope, $state, SweetAlert, Circuit, HoraFechada) {

		$scope.grafic = {};
		$scope.circuito = {};
		$scope.circuitos = [];

		$scope.init = function() {
			searchCircuitos();
			gerarGraficoInicial();
			$scope.endDateSelect = new Date();
		}

		$scope.init();

		function gerarGraficoInicial() {
			var data = new Date();
			var dataInicial = formatDate(data) + " " + "00:00:00";
			var dataFinal = formatDate(data) + " " + " 23:59:59";
			var circuito = 0;

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

		function searchCircuitos() {
			Circuit.query(
				function(circuitos) {
					$scope.circuitos = circuitos;
					$scope.circuito.nome = circuitos[0].nome;
					$scope.circuito.id = circuitos[0].id;
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
			$scope.data = {
				labels: $scope.grafic.label,
				datasets: [{
					label: 'Entrada',
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

app.controller('ChartNowCtrl', ["$scope", function($scope) {

	$scope.data = {
		labels: ['15:10:10', '15:10:20', '15:10:30', '15:10:40', '15:10:50', '15:11:00', '15:11:10'],
		datasets: [{
			label: 'Circuito 1',
			fillColor: 'rgba(220,220,220,0.2)',
			strokeColor: 'rgba(220,220,220,1)',
			pointColor: 'rgba(220,220,220,1)',
			pointStrokeColor: '#fff',
			pointHighlightFill: '#fff',
			pointHighlightStroke: 'rgba(220,220,220,1)',
			data: [65, 59, 80, 150, 42, 45, 43]
		}, {
			label: 'Circuito 2',
			fillColor: 'rgba(151,187,205,0.2)',
			strokeColor: 'rgba(151,187,205,1)',
			pointColor: 'rgba(151,187,205,1)',
			pointStrokeColor: '#fff',
			pointHighlightFill: '#fff',
			pointHighlightStroke: 'rgba(151,187,205,1)',
			data: [28, 48, 40, 24, 64, 300, 91]
		}, {
			label: 'Circuito 3',
			fillColor: 'rgba(220,220,220,0.2)',
			strokeColor: 'rgba(220,220,220,1)',
			pointColor: 'rgba(220,220,220,1)',
			pointStrokeColor: '#fff',
			pointHighlightFill: '#fff',
			pointHighlightStroke: 'rgba(220,220,220,1)',
			data: [65, 59, 180, 81, 200, 55, 40]
		}, {
			label: 'Circuito 4',
			fillColor: 'rgba(151,187,205,0.2)',
			strokeColor: 'rgba(151,187,205,1)',
			pointColor: 'rgba(151,187,205,1)',
			pointStrokeColor: '#fff',
			pointHighlightFill: '#fff',
			pointHighlightStroke: 'rgba(151,187,205,1)',
			data: [28, 48, 40, 19, 86, 27, 190]
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

app.controller('ChartNowCtrl2', ["$scope", function($scope) {

	$scope.data = {
		labels: ['15:10:10', '15:10:20', '15:10:30', '15:10:40', '15:10:50', '15:11:00', '15:11:10'],
		datasets: [{
			label: 'Circuito 2',
			fillColor: 'rgba(220,220,220,0.2)',
			strokeColor: 'rgba(220,220,220,1)',
			pointColor: 'rgba(220,220,220,1)',
			pointStrokeColor: '#fff',
			pointHighlightFill: '#fff',
			pointHighlightStroke: 'rgba(220,220,220,1)',
			data: [30, 59, 10, 81, 52, 55, 41]
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

app.controller('ChartNowCtrl3', ["$scope", function($scope) {

	$scope.data = {
		labels: ['15:10:10', '15:10:20', '15:10:30', '15:10:40', '15:10:50', '15:11:00', '15:11:10'],
		datasets: [{
			label: 'Circuito 3',
			fillColor: 'rgba(220,220,220,0.2)',
			strokeColor: 'rgba(220,220,220,1)',
			pointColor: 'rgba(220,220,220,1)',
			pointStrokeColor: '#fff',
			pointHighlightFill: '#fff',
			pointHighlightStroke: 'rgba(220,220,220,1)',
			data: [10, 20, 10, 83, 30, 57, 100]
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