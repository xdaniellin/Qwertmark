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
urls[65] = "http://" + $('#a .bmark').text();
urls[66] = "http://" + $('#b .bmark').text();
urls[67] = "http://" + $('#c .bmark').text();
urls[68] = "http://" + $('#d .bmark').text();
urls[69] = "http://" + $('#e .bmark').text();
urls[70] = "http://" + $('#f .bmark').text();
urls[71] = "http://" + $('#g .bmark').text();
urls[72] = "http://" + $('#h .bmark').text();
urls[73] = "http://" + $('#i .bmark').text();
urls[74] = "http://" + $('#j .bmark').text();
urls[75] = "http://" + $('#k .bmark').text();
urls[76] = "http://" + $('#l .bmark').text();
urls[77] = "http://" + $('#m .bmark').text();
urls[78] = "http://" + $('#n .bmark').text();
urls[79] = "http://" + $('#o .bmark').text();
urls[80] = "http://" + $('#p .bmark').text();
urls[81] = "http://" + $('#q .bmark').text();
urls[82] = "http://" + $('#r .bmark').text();
urls[83] = "http://" + $('#s .bmark').text();
urls[84] = "http://" + $('#t .bmark').text();
urls[85] = "http://" + $('#u .bmark').text();
urls[86] = "http://" + $('#v .bmark').text();
urls[87] = "http://" + $('#w .bmark').text();
urls[88] = "http://" + $('#x .bmark').text();
urls[89] = "http://" + $('#y .bmark').text();
urls[90] = "http://" + $('#z .bmark').text();

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