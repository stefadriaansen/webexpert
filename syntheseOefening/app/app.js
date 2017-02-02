/**
 * Created by 11308157 on 1/02/2017.
 */
(function () {
    'use strict';
    angular.module('myApp', ['ngRoute'])
        .config(moduleConfig);

    moduleConfig.$inject = ['$routeProvider'];

    function moduleConfig($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'views/home.html',
            controller: 'homeController',
            controllerAs: 'homeCtrl'
        })
            .when('/home', {
                templateUrl: 'views/home.html',
                controller: 'homeController',
                controllerAs: 'homeCtrl'
            })
            .when('/configurate', {
                templateUrl: 'views/configure.html',
                controller: 'configurateController',
                controllerAs: 'confCtrl'
            })
            .when('/overzichtOfferte',{
                templateUrl: 'views/offerte.html',
                controller: 'offerteController',
                controllerAs: 'ofCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }

})();