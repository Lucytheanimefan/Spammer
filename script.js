var count=0;

setInterval(function() {
	var r = confirm("Press a button");
	if (r == true) {
	    var x = "You pressed OK!";
	} else {
	    x = "You pressed Cancel!";
	    count++;
	}
	$('.count').html(count);
}, 5000);

/**
setInterval( function(){
	var newWindow=window.open('popup.html', 'name', 'height=200, width=150');
	if(window.focus){
		newWindow.focus()
	}
	return false;
	if (newWindow.closed){
		count++;
	} 
	$('.count').html(count);
}, 1000);
**/

// Function to get popups of any urls
function popitup(url) {
	var anewwindow=window.open(url,'name','height=200,width=150');
	if (window.focus) {anewwindow.focus()}
	return false;
}

popitup('https://www.facebook.com/');