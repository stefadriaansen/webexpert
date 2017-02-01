// addController.js
(function () {
	'use strict';
	// 1. Controller toevoegen aan de module
	angular.module('myApp')
		.controller('addController', addController);

	// Nu wordt de service gebruikt om personen toe te voegen
	addController.$inject = ['personService', '$location'];
	function addController(personService, $location) {
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
			personService.addPerson(newPerson);

			// 3. Terug/doorsturen naar de homepage
			$location.path('/');
		}
	}
})();
