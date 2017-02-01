(function () {
	'use strict';
	// 1. Module definieren
	angular.module('myApp', ['ngRoute'])
		.config(moduleConfig);

	// 2. Inject dependencies
	moduleConfig.$inject = ['$routeProvider'];

	// 3. Routes configureren
	function moduleConfig($routeProvider) {
		$routeProvider.when('/', {
			templateUrl: 'views/0503_home.html',
			controller: 'homeController',
			controllerAs: 'homeCtrl'
		})
			.when('/home', {
				templateUrl: 'views/0503_home.html',
				controller: 'homeController',
				controllerAs: 'homeCtrl'
			})
			.when('/detail/:id', {
				templateUrl: 'views/0502_detail.html', // ongewijzigd t.o.v. 5.2
				controller: 'detailController',
				controllerAs: 'detailCtrl'
			})
			.when('/add', {
				templateUrl: 'views/0503_add.html',
				controller: 'addController',
				controllerAs: 'addCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
	}
})();
