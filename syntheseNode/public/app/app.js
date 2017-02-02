(function () {
    'use strict';
    // 1. Module definieren
    angular.module('myApp', ['ngRoute'])
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
            .when('/auto', {
                templateUrl: 'views/auto.html',
                controller: 'autoController',
                controllerAs: 'autoCtrl'
            })
            .when('/configurator', {
                templateUrl: 'views/configurator.html',
                controller: 'configuratorController',
                controllerAs: 'configuratorCtrl'
            })
            .when('/overzicht', {
                templateUrl: 'views/overzicht.html',
                controller: 'ozController',
                controllerAs: 'ozCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
})();