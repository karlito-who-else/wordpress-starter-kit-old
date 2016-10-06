/* exported componentMoreDetailsButton */
var componentMoreDetailsButton = (function($) {
	'use strict';

	var moreDetailsButtonClass = '.more-details';

	function setup() {
		$('body').on('click', moreDetailsButtonClass, function(event) {
			var buttonText;
			$(event.currentTarget).toggleClass('opened');

			if ($(event.currentTarget).hasClass('opened')) {
				buttonText = $(event.currentTarget).attr('data-text-hide');
				if (typeof buttonText === 'undefined') {
					buttonText = localisation.pages.products.moreDetailsToggle.hideDetails;
				}
			} else {
				buttonText = $(event.currentTarget).attr('data-text-show');
				if (typeof buttonText === 'undefined') {
					buttonText = localisation.pages.products.moreDetailsToggle.showDetails;
				}
			}

			$(event.currentTarget).text(buttonText);
		});
	}

	return {

		initialise: function() {
			setup();
		}

	};
}(jQuery));
