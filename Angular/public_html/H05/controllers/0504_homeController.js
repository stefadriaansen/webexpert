// homeController.js
(function () {
	'use strict';
	// 1. Controller toevoegen aan de module
	angular.module('myApp')
		.controller('homeController', homeController);

	// 2. Service injecteren (in plaats van Factory)
	homeController.$inject = ['personService'];
	function homeController(personService) {
		var vm = this;

		// Gegevens uit de factory ophalen en toekennen aan variabelen
		vm.persons = personService.getPersons();
	}
})();
