var countryApp = angular.module('countryApp', []);
myApp.controller('countryCtrl',function($scope, $http) {
	$http.get('countries.jsosn').success(function(countryData) {
		$scope.countries = countryData;
	});
});