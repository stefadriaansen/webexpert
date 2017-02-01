// controller.js
(function () {
	angular.module('myApp') // angular.module() fungeert nu als getter.
		.controller('myController', function ($scope) {
			// 1. array met namen
			$scope.persons = [
				{ 'name': 'John', lastname: 'Visser', age: 23, email: 'john@visser.nl' },
				{ 'name': 'Bob', lastname: 'Tasseur', age: 21, email: 'bob@tasseur.nl' },
				{ 'name': 'Bart', lastname: 'Bever', age: 65, email: 'bart@bever.nl' },
				{ 'name': 'Sandra', lastname: 'de Boer', age: 36, email: 'sandra@deboer.nl' },
				{ 'name': 'Harry', lastname: 'de Vries', age: 7, email: 'harry@devries.nl' },
				{ 'name': 'Peter', lastname: 'Kassenaar', age: 45, email: 'peter@kassenaar.nl' },
				{ 'name': 'Michiel', lastname: 'de Rond', age: 37, email: 'michiel@derond.nl' },
				{ 'name': 'Jeroen', lastname: 'van Spek', age: 18, email: 'jeroen@vanspek.nl' },
				{ 'name': 'Irene', lastname: 'Nansen', age: 52, email: 'irende@nansen.nl' },
				{ 'name': 'Mike', lastname: 'Schatgraver', age: 39, email: 'mike@schatgraver.nl' }];

			// 2. klikken op een naam afvangen
			$scope.showDetail = function (person) {
				$scope.voornaam = person.name;
				$scope.achternaam = person.lastname;
				$scope.leeftijd = person.age;
				$scope.email = person.email;
			}

			// 3. controller initialiseren
			function init() {
				$scope.showDetail($scope.persons[0]);
			}

			init();
		});
})();




//**********************************************************************
// alternatieve notatiewijze, door angular.module('myApp') mee te geven als parameter aan de iffy:
//(function (app) {	
//		app.controller('myController', function ($scope) {
//			// 1. array met namen
//			$scope.persons = [
//				{ 'name': 'John', lastname: 'Visser', age: 23, email: 'john@visser.nl' },
//				{ 'name': 'Bob', lastname: 'Tasseur', age: 21, email: 'bob@tasseur.nl' },
//				{ 'name': 'Bart', lastname: 'Bever', age: 65, email: 'bart@bever.nl' },
//				{ 'name': 'Sandra', lastname: 'de Boer', age: 36, email: 'sandra@deboer.nl' },
//				{ 'name': 'Harry', lastname: 'de Vries', age: 7, email: 'harry@devries.nl' },
//				{ 'name': 'Peter', lastname: 'Kassenaar', age: 45, email: 'peter@kassenaar.nl' },
//				{ 'name': 'Michiel', lastname: 'de Rond', age: 37, email: 'michiel@derond.nl' },
//				{ 'name': 'Jeroen', lastname: 'van Spek', age: 18, email: 'jeroen@vanspek.nl' },
//				{ 'name': 'Irene', lastname: 'Nansen', age: 52, email: 'irende@nansen.nl' },
//				{ 'name': 'Mike', lastname: 'Schatgraver', age: 39, email: 'mike@schatgraver.nl' }];

//			// 2. klikken op een naam afvangen
//			$scope.showDetail = function (person) {
//				$scope.voornaam = person.name;
//				$scope.achternaam = person.lastname;
//				$scope.leeftijd = person.age;
//				$scope.email = person.email;
//			}

//			// 3. controller initialiseren
//			function init() {
//				$scope.showDetail($scope.persons[0]);
//			}

//			init();
//		});
//})(angular.module('myApp'));