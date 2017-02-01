// homeController.js
(function () {
	'use strict';
	// 1. Controller toevoegen aan de module
	angular.module('carApp')
		.controller('autoController', autoController);

	// 2. Factory injecteren
	autoController.$inject = ['carFactory'];
	function autoController(carFactory) {
		var vm = this;

		carFactory.getCars()
				.success(function (autos) {
					vm.autos = autos;
				})
				.error(function (err, status) {
					alert(err);
				});
	}
})();