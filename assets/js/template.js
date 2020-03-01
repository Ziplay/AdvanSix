jQuery(document).ready(function($) {

	$(".headroom").headroom({
		"tolerance": 20,
		"offset": 50,
		"classes": {
			"initial": "animated",
			"pinned": "slideDown",
			"unpinned": "slideUp"
		}
	});

	$(".nav_btn").click(function(){
		var part = $(this).attr("id");
		console.log(part);
		var speed = 2000; // Durée de l'animation (en ms)
		$('html, body').animate( { scrollTop: $("#partie_"+part).offset().top }, speed );
	});
});
