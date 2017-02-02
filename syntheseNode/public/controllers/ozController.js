// homeController.js
(function () {
    'use strict';
    // 1. Controller toevoegen aan de module
    angular.module('myApp')
        .controller('ozController', ozController);

    // 2. Factory injecteren
    ozController.$inject = ['carFactory'];
    function ozController(carFactory) {
        var vm = this;

        vm.car = carFactory.getCar();
        vm.ownOpties = carFactory.getOwnOpties();

        vm.optiePrijs = 0;
        for(var i = 0; i < vm.ownOpties.length; i++){
            vm.optiePrijs = vm.optiePrijs + vm.ownOpties[i].prijs;
        }

    }
})();