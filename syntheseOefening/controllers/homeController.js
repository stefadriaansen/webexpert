/**
 * Created by 11308157 on 1/02/2017.
 */
(function () {
    'use strict';
    angular.module('myApp')
        .controller('homeController', homeController);

    homeController.$inject = ['carFactory','$location'];
    function homeController(carFactory, $location) {
        var vm = this;
        vm.chosenCar = {};
        carFactory.getCars()
            .then(function (response) {
                vm.cars = response.data;
            })
            .catch(function(err){
                alert('Er is een fout opgetreden!\n' + err)
            });

        vm.changeCar = function () {
            carFactory.setCar(vm.chosenCar);
            //$location.path('/configurate');
        }
    }
})();