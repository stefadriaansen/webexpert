// AppConstants.js
(function () {
	'use strict';

	// Constanten in deze app
	angular.module('carApp', [])
		.constant('GLOBALS', {
			carUrl: 'data/automerk.json',
			optionsUrl: 'data/opties.json'
		});
})();
