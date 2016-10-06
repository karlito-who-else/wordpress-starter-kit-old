/* exported getUrlVars, removeTrailingSlash, replaceSpaces */
function getUrlVars() {
	'use strict';

	var vars = {};

	window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
		value = value.replace(/\+/g, '%20');
		vars[key] = decodeURIComponent(value);
	});

	return vars;
}

function removeTrailingSlash(string) {
	'use strict';
	return string.replace(/\/$/, '');
}

function replaceSpaces(string) {
	'use strict';
	return string.replace(/ /g, '-');
}
