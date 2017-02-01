// myController.js
(function () {
	'use strict';
	// 1. Controller toevoegen aan de module
	angular.module('myApp')
		.controller('myController', myController);

	// 2. Globals injecteren
	myController.$inject = ['GLOBALS', 'companyName'];
	function myController(GLOBALS, companyName) {
		var vm = this,
			loggedIn = false;

		// Gegevens uit de constante ophalen en toekennen aan variabelen
		vm.appName = GLOBALS.appName;
		vm.appVersion = GLOBALS.appVersion;
		vm.isLoggedIn = loggedIn ? GLOBALS.resources.logoff : GLOBALS.resources.login;
		vm.companyName = companyName;
	}
})();
