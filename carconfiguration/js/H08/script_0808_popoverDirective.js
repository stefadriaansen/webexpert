(function () {
	'use strict';
	// 1. Directive maken als losse module
	angular.module('PK.popover', [])
		.directive('myPopover', myPopover);

	// 2. Directive implementeren
	function myPopover() {
		var directive = {
			restrict: 'A',
			template: '<span>{{ label }}</span>',
			link: link
		};
		return directive;
	}

	// 3. Link-function implementeren
	function link(scope, element, attrs) {
		console.log('Popover geladen...'); // simple logging
		// Label (tekst voor de popover) ophalen uit HTML-attribuut
		// en options-object instellen
		scope.label = attrs.popoverLabel;
		var popoverOptions = {
			trigger: 'click',
			html: true,
			content: attrs.popoverHtml,
			placement: attrs.popoverPlacement
		};
		var cssOptions = {
			cursor: 'pointer',
			color: 'blue',
			fontWeight: 'bolder'
		};
		// jQuery plug-in aanroepen met ingestelde opties.
		$(element)
			.popover(popoverOptions)
			.css(cssOptions);
	}
})();