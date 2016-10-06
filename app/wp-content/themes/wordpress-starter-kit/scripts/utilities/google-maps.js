/* exported googleMaps */

/**
 * Represents a book.
 * @constructor
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 */
var googleMaps = (function() {
	'use strict';

	// var _this = this;
	var callees = [];
	var loadAttempts = 0;
	var isLoadedTimer;

	function appendScript() {
		if (!document.querySelectorAll('#googleMapsApiScript').length) {
			var googleAPisKey = document.querySelector('body').getAttribute('data-google-apis-key');

			var file = document.createElement('script');
			var lang = 'en';

			if (document.querySelector('html').lang) {
				lang = document.querySelector('html').lang;
			}

			file.id = 'googleMapsApiScript';
			// file.src = 'https://maps.googleapis.com/maps/api/js?callback=googleMaps.' + googleMaps.load.name + '&signed_in=true&language=' + lang + '&key=' + googleAPisKey + '&libraries=places'; //the name property is an es2015-only feature
			file.src = 'https://maps.googleapis.com/maps/api/js?callback=googleMaps.load&signed_in=true&language=' + lang + '&key=' + googleAPisKey + '&libraries=places';
			file.type = 'text/javascript';

			document.getElementsByTagName('head')[0].appendChild(file);
		}
	}

	return {
		load: function(callback) {
			window.clearTimeout(isLoadedTimer);

			if (typeof callback === 'function') {
				callees.push(callback);
			}

			if (loadAttempts >= 10) {
				console.error('Google Maps failed to load after 10 attempts');
				return;
			}

			if (typeof google === 'object' && typeof google.maps === 'object') {
				var i = callees.length;

				while (i--) {
					callees[i].call();
					callees.splice(i, 1);
				}
			} else {
				appendScript();

				isLoadedTimer = window.setTimeout(function() {
					loadAttempts++;
					googleMaps.load();
				}, 500);
			}

		}

	};

}());
