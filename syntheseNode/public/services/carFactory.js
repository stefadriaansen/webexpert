// personFactory.js
(function () {
    'use strict';

    // Definitie van de personFactory
    angular.module('myApp')
        .factory('carFactory', carFactory);

    // Implementatie van personFactory
    carFactory.$inject = ['$http'];
    function carFactory($http) {
        // 1. Definieer (leeg) factory-object
        var factory = {};

        var opties = new Array();
        var car = {};

        // 3. Defineer een API met methods voor deze factory
        factory.getCars = function () {
            return $http({
                method:'GET',
                url: 'http://localhost:3000/api/automerken'
            })
        }

        factory.getOpties = function () {
            return $http({
                method:'GET',
                url: 'http://localhost:3000/api/opties'
            })
        }

        factory.setCar = function (selectedCar) {
            car = selectedCar;
        }

        factory.getCar = function () {
            return car;
        }

        // 3. Defineer een API met methods voor deze factory
        factory.getOwnOpties = function () {
            return opties;
        }

        factory.setOwnOpties = function (newOpties) {
            opties = newOpties;
        }

        factory.emptyOwnOpties = function () {
            opties.length = 0;
        }

        factory.addOptie = function (newOptie) {
            opties.push(newOptie);
        }

        // 4. Tot slot: retourneer factory-object
        return factory;
    }
})();