(function () {
    'use strict';
    // 1. Module definieren
    angular.module('carApp', ['ngRoute'])
        .config(moduleConfig);

    // 2. Inject dependencies
    moduleConfig.$inject = ['$routeProvider'];

    // 3. Routes configureren
    function moduleConfig($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'views/auto.html',
            controller: 'autoController',
            controllerAs: 'autoCtrl'
            })
            .when('/configurator/:id', {
                templateUrl: 'views/configurator.html',
                controller: 'configuratorController',
                controllerAs: 'configuratorCtrl'
            })
            .when('/overzicht', {
                templateUrl: 'views/overzicht.html',
                controller: 'overzichtController',
                controllerAs: 'overzichtCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
})();
