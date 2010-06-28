var IA = {
	fireEvent: function(el, eventName) {
		var evt = document.createEvent("HTMLEvents");
		evt.initEvent(eventName, true, true);
		el.dispatchEvent(evt);
	},
	init: function() {
		console.log('doing stuff');
		document.querySelectorAll('#bookmark_list')[0].addEventListener('click', function(event) {
/*			setTimeout(function() {*/
				if (event.target.className == 'tableViewCellTitleLink') {
					event.target.setAttribute('target', '_blank');
					var archiveButton = event.target.parentNode.parentNode.querySelectorAll('a.archiveButton')[0];
					IA.fireEvent(archiveButton, 'click');
				}
/*			}, 0);*/
		});
	}
}

// inject as soon as possible
if ( document.readyState == 'complete' )
	IA.init();
else window.addEventListener('load', function() {
	IA.init();
});
