// detailController.js
(function () {
	'use strict';

	angular.module('myApp')
		.controller('detailController', detailController);

	// Nu wordt de service gebruikt in plaats van de Factory
	detailController.$inject = ['$routeParams', 'personService'];

	function detailController($routeParams, personService) {
		var vm = this,
			id = $routeParams.id;
		vm.person = personService.getPerson(id);
	}
})();

