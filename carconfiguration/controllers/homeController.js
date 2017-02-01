(function () {
    'use strict';
    // 1. Controller toevoegen aan de module
    angular.module('myApp')
        .controller('homeController', homeController)

    homeController.$inject = ['carFactory'];
    function homeController(carFactory) {
        var vm = this;
        carFactory.getCars()
            .then(function(response){
                vm.cars = response.data
            })
            .catch(function (err) {
            alert('Er is een fout opgetreden!\n' + err)
        });
    }
})();
