var countryApp = angular.module('countryApp', ['ngRoute']);

countryApp.config(function($routeProvider) {
	$routeProvider.when('/', {
		template: '<ul><li ng-repeat="country in countries">{{country.name}}</li></ul>',
		controller: 'countryCtrl'		
	}).
	when('/:countryName', {
		template: '<h1>Country deatil will go here.</h1>',
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
	colsole.log($routeParams);
});