// AppConstants.js
(function () {
	'use strict';
	// Constanten in deze app
	angular.module('myApp', [])
		.constant('GLOBALS', {
			appName: 'Super Angular App',
			appVersion: '1.0.0',
			baseUrl: 'http://api.mijnbedrijf.nl',
			productUrl: '/products',
			aboutUrl: '/about',
			resources: {
				login: 'Aanmelden',
				logoff: 'Afmelden'
			}
			// ... meer constanten
		});
})();