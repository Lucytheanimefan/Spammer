var urls=['http://www.clickhole.com/', 
'https://services.math.duke.edu/~cbray/1516Spring/216/index.html',
'http://www.animemaru.com/',
'http://kissanime.to/',
'http://www.findtheinvisiblecow.com/',
'https://www.youtube.com/watch?v=xE8Nr-mDa-Q',
'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
'http://impossiblegame.org/',
'http://www.popcap.com/insaniquarium',];

// Function to get popups of any urls
function popitup(url) {
	var anewwindow=window.open(url,'name','height=200,width=150');
	if (window.focus) {anewwindow.focus()}
	//return false;
}


function horror(){
	for (var i=0; i<urls.length; i++){
		popitup(urls[i]);
		console.log(urls[i]);
		if (saveMe()){
			break;
		}
		if (i==urls.length-1){
			horror();
		}
	}
}

horror(); 

function saveMe(){
	console.log("button clicked");
	return true;
}