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
