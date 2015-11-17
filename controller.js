var countryApp = angular.module('countryApp', ['ngRoute']);

countryApp.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'pages/country-list.html',
		controller: 'countryCtrl'		
	}).
	when('/:countryName/:population', {
		templateUrl: 'pages/country-detail.html',
		controller: 'countryDetailCtrl'	
	}).
	when('/:countryName', {
		templateUrl: 'pages/country-detail.html',
		controller: 'countryDetailCtrl'
	}).
	when('/:capital', {
		templateUrl: 'pages/country-detail.html',
		controller: 'countryDetailCtrl'
	}).
	otherwise({
		redirectTo: '/'
	});
});

countryApp.controller('countryCtrl',function($scope, $http) {
	
	$http.get('countries.json').success(function(countryData) {
		$scope.countries = countryData;
	});

});

countryApp.controller('countryDetailCtrl', function($scope, $routeParams, $http) {

	$scope.name = $routeParams.countryName;
	$scope.population = $routeParams.population;
	$http.get('countries.json').success(function(countryData) {
		var country = countryData.filter(function(currCountry) {
			return currCountry.name === $scope.name;
		})[0];
		$scope.country = country;
	});
});

// countryApp.controller('countryCapitalCtrl', function($scope, $routeParams, $http) {

// 	$scope.capital = $routeParams.capital;
// 	$scope.population = $routeParams.population;
// 	$http.get('countries.json').success(function(countryData) {
// 		var country = countryData.filter(function(currCountry) {
// 			return currCountry.name === $scope.name;
// 		})[0];
// 		$scope.name = countryData.name;
// 		$scope.population = countryData.population;
// 	});
// });