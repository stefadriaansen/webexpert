(function () {
    'use strict';
    // 1. Module definieren
    angular.module('myApp', ['ngRoute'])
        .config(moduleConfig)

    // 2. Inject dependencies
    moduleConfig.$inject = ['$routeProvider'];

    // 3. Routes configureren
    function moduleConfig($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/homeView.html',
                controller: 'homeController',
                controllerAs: 'homeCtrl',

            })
            .when('/home', {
                templateUrl: 'views/homeView.html',
                controller: 'homeController',
                controllerAs: 'homeCtrl'

            })
            .when('/config', {
                templateUrl: 'views/configView.html',
                controller: 'configController',
                controllerAs: 'configCtrl'
            })
            .when('/overzichtOfferte', {
                templateUrl: 'views/overzichtOfferteView.html',
                controller: 'overzichtOfferteController',
                controllerAs: 'overzichtOfferteCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
})();
