//object literal
//var cool=document.getElementById('q').lastChild;
//var yay=cool->getAttribute('href');


//urls[81] = cool;
//keyup event on the body element using jquery
/*$(window).on("keyup",function(e){
	
	url = urls[e.keyCode.toString()];
	if (url != undefined)
	{
		$('#' + url).addClass('active');
		window.location = url;
	}
});*/

$(window).keydown(function(e) {
		if($("#javascript").length!=0){

	key = (e.keyCode) ? e.keyCode : e.which;
	if (key==32)
		$('.space').addClass('active');
	else
	$('.key.'+key).addClass('active');
	console.log(key);
}
});

$(window).keyup(function(e) {
		if($("#javascript").length!=0){

	if (key==32)
		$('.space').removeClass('active');
	key = (e.keyCode) ? e.keyCode : e.which;
	$('.key.'+key).removeClass('active');


var urls = new Array();
//urls[65] = "http://www.google.com";
//urls[83] = "http://www.facebook.com";
//urls[68] = "http://www.quixey.com";
//urls[70] = "http://www.lahacks.com";
////urls[74] = "http://www.nextdoor.com";
//urls[75] = "http://www.gmail.com";
//urls[76] = "http://www.linkedin.com";
urls[81] = "http://" + $('#q .bmark').text();
console.log(urls[81]);

	url = urls[e.keyCode];
	console.log(url);
	if (url != undefined)
	{
		a = window.open(url,'_blank');
		a.blur();
//		window.focus();
		//window.open(url);
		}
	}
});