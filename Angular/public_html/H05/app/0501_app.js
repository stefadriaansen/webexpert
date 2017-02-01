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
            templateUrl: 'views/0501_home.html',
            controller: 'homeController',
            controllerAs: 'homeCtrl'
        })
            .when('/home', {
                templateUrl: 'views/0501_home.html',
                controller: 'homeController',
                controllerAs: 'homeCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
})();
