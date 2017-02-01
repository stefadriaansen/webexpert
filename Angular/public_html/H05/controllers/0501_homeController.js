// homeController.js
(function () {
	'use strict';
	// 1. Controller toevoegen aan de module
	angular.module('myApp')
		.controller('homeController', homeController);

	// 2. Factory injecteren
	homeController.$inject = ['personFactory'];
	function homeController(personFactory) {
		var vm = this;

		// Gegevens uit de factory ophalen en toekennen aan variabelen
		vm.persons = personFactory.getPersons();
	}
})();
