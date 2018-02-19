$(document).ready(function() {



	$(window).resize(function (e) {
		if (window.resizeAnimationTimeout != null) {
			window.clearTimeout(window.resizeAnimationTimeout);
		}
		window.resizeAnimationTimeout = window.setTimeout(function () {
			var w = $(window);
			startAnimation(
				document.getElementById("home"),
				w.width(),
				w.height());
		}, 200);
	});

	window.resizeAnimationTimeout = null;
	
});
