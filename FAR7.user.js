// ==UserScript==
// @name FAR7-addon
// @description FAR7 addon
// @author 3y3 gH0Ti
// @license MIT
// @version 1.1
// @include http://game.far7.by/*
// ==/UserScript==
(function (window, undefined) {
    var W;
    if (typeof unsafeWindow != undefined) {
        W = unsafeWindow
    } else {
        W = window;
    }
    if (W.self != W.top) {
        return;
    }
    if (/http:\/\/game.far7.by/.test(W.location.href)) {		
		(function checkStart(){
			if(document.querySelector('#commbar .jxBarContainer')){
				var s = document.createElement('script');
					s.src = 'https://raw.github.com/3y3/FAR7-addon/master/FAR7.source.js?'+new Date().getTime();
					document.head.appendChild(s);			
			}
			else{
				setTimeout(checkStart,1000);
				console.log('no fse');
			}
		})();		
    }
})(window);