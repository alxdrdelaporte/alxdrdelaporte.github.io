var konami = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
var progress = 0;

var keyHandler = function(event){
	if (konami.indexOf(event.key) < 0 || event.key !== konami[progress]) {
		progress = 0;
		return;
	}
	progress++;
	if (konami.length === progress) {
		progress = 0;
		var mystyle = document.getElementById("maincss");
		var stylecheck = mystyle.href.endsWith("alxdr1.css");
		var congrats = document.getElementById("konamicongrats");
		if (stylecheck == true) {
			mystyle.setAttribute("href", "./style/alxdr2.css");
			congrats.setAttribute("style", "display: block");
		} else {
			mystyle.setAttribute("href", "./style/alxdr1.css");
			congrats.setAttribute("style", "display: none");
		}
	}
};
document.addEventListener('keydown', keyHandler, false);
