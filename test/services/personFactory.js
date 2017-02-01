// personFactory.js
(function () {
	'use strict';

	// Definitie van de personFactory
	angular.module('testApp')
		.factory('personFactory', personFactory);

	personFactory.$inject = ['$http'];
	// Implementatie van personFactory
	function personFactory($http) {
		var factory = {};

		factory.getPersons = function () {
			return $http({
				method: 'GET',
				url: 'data/persons.json'
			});
		};
		return factory;
	}
})();
