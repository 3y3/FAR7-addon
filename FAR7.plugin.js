window.onload = function() {
	(	document.head
	|| 	document.body
	|| 	document.documentElement
		).appendChild(document.createElement('script')).src = chrome.extension.getURL('inject.js');
}