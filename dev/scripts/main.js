$(document).ready(function () {
    
    //Scroll Magic
	const controller = new ScrollMagic.Controller();

	const scrollMagicScene = function (elementID, classToAdd) {
	    let newScene = new ScrollMagic.Scene({
	            triggerElement: elementID,
	            offset: -250,
	        })
	        .setClassToggle(elementID, classToAdd)
	        .addTo(controller)
	}

	scrollMagicScene("#appText1", "piece-fade-in");
    scrollMagicScene("#appText2", "fadeIn");
    scrollMagicScene("#appText3", "fadeIn");
    scrollMagicScene("#appText4", "fadeIn");

});