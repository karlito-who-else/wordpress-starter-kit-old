/* exported componentModuleQuotes */
var componentModuleQuotes = (function($) {
	'use strict';

	var quotesModules = '.grid-module-quotes';
	var $quotesModules = $(quotesModules);

	function setup() {
		/* jshint validthis:true */
		var _this = this;

		var $items = $('.item', _this);
		var autoplayInterval = ($items.attr('data-autoplay-interval') ? $items.attr('data-autoplay-interval') : 7500);

		function showNextItem() {
			var $activeItem;
			var $nextItem;

			if ($items.filter('.active').length) {
				$activeItem = $items.filter('.active');
			} else {
				$activeItem = $items.first();
			}

			if ($activeItem.is(':last-child')) {
				$nextItem = $items.first();
			} else {
				$nextItem = $activeItem.next();
			}

			$nextItem.addClass('active');
			$activeItem.removeClass('active');
		}

		if ($items.length > 1) {
			setInterval(showNextItem, autoplayInterval);
		}

	}

	return {

		initialise: function() {
			$quotesModules.each(setup);
		}

	};

}(jQuery));
