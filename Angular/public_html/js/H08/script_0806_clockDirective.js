(function () {
	'use strict';
// 1. Directive maken als losse module
	angular.module('PK.clock', [])
		.directive('myClock', myClock);

// 2. Directive implementeren
	function myClock() {
		var directive = {
			template: '<div>{{ vm.city }} ({{vm.difference}}): {{ vm.time | date : "HH:mm:ss"}}</div>',
			controller: clockController,	// controllerfunctie
			controllerAs: 'vm',				// controllerAs-alias
			bindToController: true,
			scope: {
				timezone: '@',
				city: '@',
				offset: '@'
			}
		};
		return directive;
	}

// 3. Controller voor de directive
	clockController.$inject = ['$interval'];
	function clockController($interval) {
		var vm = this;
		console.log('Timezone: ' + vm.timezone); // simpele logging
		// interval loop
		var update = $interval(function () {
			var offset = parseInt(vm.offset),	// integer van van maken
				here = new Date(),
				there = new Date();

			vm.difference = offset > 0 ? offset + ' uur later' : offset + ' uur vroeger';
			there.setHours(here.getHours() + offset);
			vm.time = there;
		}, 1000);
	}
})();