var count=0;

setInterval(function() {
	var r = confirm("Press a button");
	if (r == true) {
	    x = "You pressed OK!";
	} else {
	    x = "You pressed Cancel!";
	    count++;
	}
	$('.count').html(count);
}, 5000);


setInterval( function(){
	newWindow=window.open('popup.html', 'name', 'height=200, width=150');
	if(window.focus){
		newWindow.focus()
	}
	return false;
	if (newWindow.closed){
		count++;
	} 
	$('.count').html(count);
}, 1000);


//$("picksomething").datepicker();
