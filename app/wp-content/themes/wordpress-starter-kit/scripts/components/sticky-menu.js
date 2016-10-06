/* exported componentStickyMenus */
var componentStickyMenus = (function($) {
	'use strict';

	var stickyMenus = '.sticky-menu';
	var $stickyMenus = $(stickyMenus);

	function setup() {
		/* jshint validthis:true */
		var _this = this;
		var documentHeight;
		var documentScrollTop;
		var stickyMenuPositionBottom;
		var mainFooterHeight;
		var timer;

		function setMenuPosition() {
			documentScrollTop = $(document).scrollTop();

			if ($(window).width() > windowWidthMobileMax) {
				// if ((documentScrollTop + $(window).height()) >= (documentHeight - mainFooterHeight)) {
				if ((documentScrollTop + stickyMenuPositionBottom) >= (documentHeight - mainFooterHeight)) {
					$(_this).addClass('absolute').removeClass('fixed');
					$(_this).css('bottom', 0);
					$(_this).css('top', 'auto');
				} else if (documentScrollTop >= $('.feature-hero, .feature-antihero').outerHeight()) {
					$(_this).addClass('fixed').removeClass('absolute');
					$(_this).css('bottom', 'auto');
					$(_this).css('top', $('header.main').outerHeight());
					stickyMenuPositionBottom = $(_this)[0].getBoundingClientRect().bottom;
				} else {
					$(_this).removeClass('fixed absolute');
					$(_this).css('bottom', 'auto');
					$(_this).css('top', 0);
				}
			} else {
				$(_this).removeClass('fixed absolute');
				$(_this).css('bottom', 'auto');
				$(_this).css('top', 0);
			}

		}

		$(window).on('scroll', function() {
			if (timer) {
				clearTimeout(timer);
			}

			timer = setTimeout(setMenuPosition, 10);
		});

		$(window).on('load resize', function() {
			documentHeight = $(document).height();
			documentScrollTop = $(document).scrollTop();
			stickyMenuPositionBottom = $(_this)[0].getBoundingClientRect().bottom;
			mainFooterHeight = $('footer.main').outerHeight();

			setMenuPosition();
		});

	}

	return {

		initialise: function() {
			$stickyMenus.each(setup);
		}

	};

}(jQuery));
