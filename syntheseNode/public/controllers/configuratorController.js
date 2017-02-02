// homeController.js
(function () {
    'use strict';
    // 1. Controller toevoegen aan de module
    angular.module('myApp')
        .controller('configuratorController', configuratorController);

    // 2. Factory injecteren
    configuratorController.$inject = ['carFactory'];
    function configuratorController(carFactory) {
        var vm = this;

        vm.car = carFactory.getCar();

        // Gegevens uit de factory ophalen en toekennen aan variabelen
        carFactory.getOpties()
            .then(function(response){
                vm.opties = response.data;
            })
            .catch(function (err) {
                alert('fout: ' + err);
            });

        vm.ownOpties = carFactory.getOwnOpties();

        
        vm.addOptie = function (newOptie) {
            vm.ownOpties = carFactory.addOptie(newOptie);
        };

        vm.emptyOwnOpties = function () {
            vm.ownOpties = carFactory.emptyOwnOpties();        
        }
    }
})();