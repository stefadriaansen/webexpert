/**
 * Created by 11308157 on 1/02/2017.
 */
// carFactory.js
(function () {
    'use strict';

    // Definitie van de carFactory
    angular.module('myApp')
        .factory('carFactory', carFactory);

    carFactory.$inject = ['$http'];
    // Implementatie van carFactory
    function carFactory($http) {
        var factory = {};
        var car = {};

        factory.getCars = function () {
            return $http({
                method: 'GET',
                url: 'data/automerk.json'
            });
        };

        factory.setCar = function (selectedCar) {
            car = selectedCar;
        }
        factory.getCar = function () {
            return car;
        }

        return factory;
    }
})();
