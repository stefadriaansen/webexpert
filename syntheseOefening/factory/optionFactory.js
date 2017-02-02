/**
 * Created by 11308157 on 2/02/2017.
 */
// optionFactory.js
(function () {
    'use strict';

    angular.module('myApp')
        .factory('optionFactory', optionFactory);

    optionFactory.$inject = ['$http'];
    function optionFactory($http) {
        var factory = {};
        var chosenOptions = new Array();


        factory.getOptions = function () {
            return $http({
                method: 'GET',
                url: 'data/opties.json'
            });
        };

        factory.pushOption = function(option){
            chosenOptions.push(option);
        };
        factory.getOptions = function () {
            return chosenOptions;
        };

        return factory;
    }
})();
