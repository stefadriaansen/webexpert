// addController.js
(function () {
	'use strict';
	// 1. Controller toevoegen aan de module
	angular.module('myApp')
		.controller('addController', addController);

	addController.$inject = ['personFactory', '$location'];
	function addController(personFactory, $location) {
		var vm = this;

		// 1. Nieuwe persoon maken op basis van formulier.
		// ID is uiteraard niet bekend, wordt in de factory berekend.
		vm.addPerson = function () {
			var newPerson = {
				name: vm.person.name,
				lastname: vm.person.lastname,
				age: vm.person.age,
				email: vm.person.email
			};

			// 2. Toevoegen via factory
			personFactory.addPerson(newPerson);

			// 3. Terug/doorsturen naar de homepage
			$location.path('/');
		}
	}
})();
