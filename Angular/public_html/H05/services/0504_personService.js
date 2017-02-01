// personService.js
(function () {
	'use strict';

	// Definitie van de personFactory
	angular.module('myApp')
		.service('personService', personService);

	// Implementatie van personService
	function personService() {
		// 1. Definieer data voor de service (later zullen deze gegevens uit een database komen)
		var persons = [
			{id: 1, 'name': 'John', lastname: 'Visser', age: 23, email: 'john@visser.nl'},
			{id: 2, 'name': 'Bob', lastname: 'Tasseur', age: 21, email: 'bob@tasseur.nl'},
			{id: 3, 'name': 'Bart', lastname: 'Bever', age: 65, email: 'bart@bever.nl'},
			{id: 4, 'name': 'Sandra', lastname: 'de Boer', age: 36, email: 'sandra@deboer.nl'},
			{id: 5, 'name': 'Harry', lastname: 'de Vries', age: 7, email: 'harry@devries.nl'},
			{id: 6, 'name': 'Peter', lastname: 'Kassenaar', age: 45, email: 'peter@kassenaar.nl'},
			{id: 7, 'name': 'Michiel', lastname: 'de Rond', age: 37, email: 'michiel@derond.nl'},
			{id: 8, 'name': 'Jeroen', lastname: 'van Spek', age: 18, email: 'jeroen@vanspek.nl'},
			{id: 9, 'name': 'Irene', lastname: 'Nansen', age: 52, email: 'irende@nansen.nl'},
			{id: 10, 'name': 'Mike', lastname: 'Schatgraver', age: 39, email: 'mike@schatgraver.nl'}
		];

		// 2. Defineer een API met methods voor deze service.
		// Methodes worden rechtstreeks op 'this' gedefinieerd.
		this.getPersons = function () {
			return persons;
		}

		this.getPerson = function (id) {
			return persons[id - 1]; // -1 omdat de array zero-based is
		}

		this.addPerson = function (newPerson) {
			// Het nieuwe persoon heeft nog geen ID. Nu Quick&Dirty het hoogste huidige ID
			// uit de array opzoeken en deze toekennen aan newPerson
			var id = 0;
			for (var i = 0; i < persons.length; i++) {
				if (persons[i].id >= id) {
					id = persons[i].id + 1;
				}
			}
			newPerson.id = id;
			persons.push(newPerson);
		}
	}
})();
