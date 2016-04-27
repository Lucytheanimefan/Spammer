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


function getPopUp(){
	var i = Math.floor(0 + Math.random() * urls.length);
		console.log(urls[i]);
		popitup(urls[i]);
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

//create buttons
for (var i=0; i<55; i++){
	var btn = document.createElement("button");        // Create a <button> element
	var t = document.createTextNode("Click ME!");     // Create a text node
	btn.className="button";
	btn.appendChild(t);                                // Append the text to <button>
	document.body.appendChild(btn);
	btn.style.background=getRandomColor();// Append <button> to <body>	
	btn.onclick=function(){
		getPopUp();
	}
}


