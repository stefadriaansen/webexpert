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
            .then(function(response){
                vm.cars = response.data
            })
            .catch(function (err) {
            alert('Er is een fout opgetreden!\n' + err)
        });
	}
})();