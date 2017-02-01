// personFactory.js
(function () {
	'use strict';

	// Definitie van de carFactory
	angular.module('carApp')
		.factory('carFactory', carFactory);

	carFactory.$inject = ['$http', 'GLOBALS'];
	function carFactory($http, GLOBALS) {
		
		var factory = {}


		factory.getCars = function () {
			return $http({
				url: GLOBALS.carUrl,
				method: 'GET'
			});
		}

		factory.getOptions = function () {
			return $http({
				url: GLOBALS.optionsUrl,
				method: 'GET'
			});
		}
		return factory;
	}

})();
