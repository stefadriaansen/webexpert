// personFactory.js
(function () {
    'use strict';

    // Definitie van de personFactory
    angular.module('myApp')
        .factory('carFactory', carFactory);

    // Implementatie van personFactory
    carFactory.$inject = ['$http'];
    function carFactory($http) {
        var factory = {};

        factory.getCars = function(){
            return $http({
                method:'GET',
                url: 'data/automerk.json'
            })
        }
        return factory;
    }
})();