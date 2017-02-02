/**
 * Created by 11308157 on 1/02/2017.
 */
(function () {
    'use strict';
    angular.module('myApp')
        .controller('configurateController', configurateController);

    configurateController.$inject = ['carFactory', 'optionFactory'];
    function configurateController(carFactory, optionFactory) {
        var vm = this;
        vm.car = carFactory.getCar();
        vm.ownOptions = [];
        optionFactory.getOptions()
            .then(function (response) {
                vm.options = response.data;
            })
            .catch(function(err){
                alert('Er is een fout opgetreden!\n' + err)
            });
        vm.addOption = function(option){
            optionFactory.pushOption(option);
            vm.ownOptions.push(option);
        }

    }
})();