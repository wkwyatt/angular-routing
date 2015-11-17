var countryApp = angular.module('countryApp', ['ngRoute']);

countryApp.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'pages/country-list.html',
		controller: 'countryCtrl'		
	}).
	when('/:countryName', {
		templateUrl: 'pages/country-detail.html',
		controller: 'countryDetailCtrl'	
	}).otherwise({
		redirectTo: '/'
	});
});

countryApp.controller('countryCtrl',function($scope, $http) {
	
	$http.get('countries.json').success(function(countryData) {
		$scope.countries = countryData;
	});

});

countryApp.controller('countryDetailCtrl', function($scope, $routeParams) {
	console.log($routeParams);
});