"use strict";

$(document).ready(function () {

				//Scroll Magic
				var controller = new ScrollMagic.Controller();

				var scrollMagicScene = function scrollMagicScene(elementID, classToAdd) {
								var newScene = new ScrollMagic.Scene({
												triggerElement: elementID,
												offset: -250
								}).setClassToggle(elementID, classToAdd).addTo(controller);
				};

				scrollMagicScene("#appText1", "piece-fade-in");
				scrollMagicScene("#appText2", "fadeIn");
				scrollMagicScene("#appText3", "fadeIn");
				scrollMagicScene("#appText4", "fadeIn");
});