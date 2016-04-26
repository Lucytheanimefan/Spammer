var urls = ['http://www.clickhole.com/article/8-reasons-everyone-should-learn-how-code-2985',
	'https://services.math.duke.edu/~cbray/1516Spring/216/index.html',
	'http://www.animemaru.com/',
	'http://kissanime.to/',
	'http://www.findtheinvisiblecow.com/',
	'https://www.youtube.com/watch?v=xE8Nr-mDa-Q',
	'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
	'http://impossiblegame.org/',
	'http://www.popcap.com/insaniquarium',
];
var newwindow;
var e;
// Function to get popups of any urls
function popitup(url, callback) {
	window.open(url, 'name', 'height=Math.random()*500+150, width=Math.random()*500+150, screenX=Math.random()*screen.width, screenY=Math.random()*screen.height');
	//if (window.focus) {anewwindow.focus()}
	//return false;
}

/**
	setTimeout(function() {
		var i = Math.floor(0 + Math.random() * urls.length);
		console.log(urls[i]);
		popitup(urls[i]);
	}, 5000);
	**/

function getPopUp(){
	var i = Math.floor(0 + Math.random() * urls.length);
		console.log(urls[i]);
		popitup(urls[i]);
}

/**
while (true) {
	//for (var i = 0; i < urls.length; i++) {
	var i = Math.floor(0 + Math.random() * urls.length);
	console.log(i);
	popitup(urls[i]);
	setTimeout(function() {
		if (newwindow.close()) {
			popitup(urls[Math.floor(0 + Math.random() * urls.length)]);
		}
		console.log(urls[i]);
	}, 10000);
}
**/
function killEm(event) {
	if (event.keyCode == 76) {
		return true;
	}
}
/**
console.log(urls);
popitup(urls[0]);
console.log('1');
popitup(urls[1]);
console.log('2');
popitup(urls[2]);
console.log(2);
popitup(urls[3]); //only this one pops up

function horror(){
	for (var i=0; i<urls.length; i++){
		popitup(urls[i]);
		console.log(urls[i]);
		//if (click){
		//	break;
		//}
		window.setTimeout(10000);
		if (i==urls.length-1){
			horror();
		}
	}
}
//horror();

while(saveMe() == false){
	horror();

}
function saveMe(){
	console.log("button clicked");
	return true;
}
**/