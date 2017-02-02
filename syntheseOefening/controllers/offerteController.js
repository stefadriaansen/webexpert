/**
 * Created by 11308157 on 2/02/2017.
 */
(function () {
    'use strict';
    angular.module('myApp')
        .controller('offerteController', offerteController);

    offerteController.$inject = ['carFactory','optionFactory'];
    function offerteController(carFactory, optionFactory) {
        var vm = this;
        vm.chosenOptions = optionFactory.getOptions();
        vm.chosenCar = carFactory.getCar();

        vm.prijsOpties = 0;

        for(var i = 0; i < vm.chosenOptions.length; i++){
            vm.prijsOpties += parseInt(vm.chosenOptions[i].prijs);
        }
        vm.totaalExBtw = parseInt(chosenCar.prijs) + prijsOpties;

    }
})();