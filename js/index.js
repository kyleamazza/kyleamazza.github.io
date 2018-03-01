'use strict';

window.onclick = function(e) {
	if (e.target.matches('.bar') || e.target.matches('#burger')) {
		document.getElementsByClassName('toggle')[0].classList.toggle('show');
	} else {
		document.getElementsByClassName('toggle')[0].classList.remove('show');
	}
}
var elements = document.getElementsByClassName('project-pane');
Array.prototype.map.call(elements, function(p) {
	VanillaTilt.init(p, {
		glare: true,
		"max-glare": 0.25,
		scale: 1.05,
		reverse: true,
		perspective: 9999,
		axis: 'x'
	});
});
