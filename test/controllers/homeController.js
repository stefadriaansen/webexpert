// homeController.js
(function () {
	'use strict';
	angular.module('testApp')
		.controller('homeController', homeController)

	
	homeController.$inject = ['personFactory'];
	function homeController(personFactory) {
		var vm = this;

		// Gegevens uit de factory ophalen en toekennen aan variabelen
		personFactory.getPersons()
				.success(function (persons) {
					vm.persons = persons;
				})
				.error(function (err, status) {
					alert(status);
					vm.errorMsg = err;
					vm.status = status;
				});
	}

})();