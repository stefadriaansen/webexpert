// homeController.js
(function () {
    'use strict';
    // 1. Controller toevoegen aan de module
    angular.module('myApp')
        .controller('autoController', autoController);

    // 2. Factory injecteren
    autoController.$inject =['$location', 'carFactory'];
    function autoController($location, carFactory) {
        var vm = this;

        // Gegevens uit de factory ophalen en toekennen aan variabelen
        carFactory.getCars()
            .then(function(response){
                vm.cars = response.data
            })
            .catch(function (err) {
                alert('fout: ' + err)
            });

        vm.config = function(){
            carFactory.setCar(vm.selectedCar);
            $location.path('/configurator');
        }

    }
})();