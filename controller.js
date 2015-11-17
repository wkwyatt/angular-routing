var countryApp = angular.module('countryApp', []);
countryApp.controller('countryCtrl',function($scope, $http) {
	$http.get('countries.json').success(function(countryData) {
		$scope.countries = countryData;
	});
});