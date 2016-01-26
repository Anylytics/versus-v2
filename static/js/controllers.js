var ngAppControllers = angular.module('ngAppControllers', []);


ngAppControllers.controller('versusController', ['$scope','$http', function($scope, $http) {
	//introJs().start();			//TODO: Build introJs as a step by step walk through of the application
	$scope.loading = false;
	$scope.search_loading = false;

	$scope.matchup = {
		"gauge_angle":0,
		"winner":"",
		"winner_side":"",
		"animate":"",
		"opp1": {
			"name":""
		},
		"opp2": {
			"name":""
		}
	};

	$scope.randomizeAngle = function() {
		//$scope.matchup.animate = "";
		$scope.matchup.gauge_angle = 90 - Math.floor((Math.random())*180);

		if ($scope.matchup.gauge_angle>0) {
			$scope.matchup.winner = $scope.matchup.opp2.name;
			//$scope.matchup.winner_side = 'right';
		} else {
			$scope.matchup.winner = $scope.matchup.opp1.name;
			//$scope.matchup.winner_side = 'left';
		}
		//$scope.matchup.animate = "animated wobble";
	};


	$('#opp1').autocomplete({
		serviceUrl: 'https://dev13895.service-now.com/tennis_players.do',
		//deferRequestBy: 300,
		onSearchStart: function(query){$scope.search_loading=true},
		onSearchComplete: function(query){$scope.search_loading=false},
		onSelect: function (suggestion) {
			//$scope.getSimilarNames(suggestion.data, suggestion.value);
			console.log(suggestion);
		},
		showNoSuggestionNotice: true,
		noSuggestionNotice: 'Sorry, no players found'/*,
		groupBy: 'gender'*/
	});


	$('#opp2').autocomplete({
		serviceUrl: 'https://dev13895.service-now.com/tennis_players.do',
		//deferRequestBy: 300,
		onSearchStart: function(query){$scope.search_loading=true},
		onSearchComplete: function(query){$scope.search_loading=false},
		onSelect: function (suggestion) {
			//$scope.getSimilarNames(suggestion.data, suggestion.value);
			console.log(JSON.parse(suggestion.data));
		},
		showNoSuggestionNotice: true,
		noSuggestionNotice: 'Sorry, no players found'/*,
		groupBy: 'gender'*/
	});



}]);


ngAppControllers.controller('urlParamsController', ['$scope', '$routeParams', function($scope, $routeParams) {
	//Example of a basic controller, includes ability to pull route parameters ($routeParams.name defined in app.js routing configuration)
	$scope.data = $routeParams.name + " from URL parameter";
}]);