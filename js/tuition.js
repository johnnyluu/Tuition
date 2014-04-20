var SILLY = (function(module){
	module.DoIt = function(resultobject){
		resultobject.prepend(Date() + '<br/>');
	};
	return module;
}(SILLY || {}));

$('#silly').click(function(){
	SILLY.DoIt($('#results'));
	if ($('#clear').css("color") == 'rgb(169, 169, 169)'){
		$('#clear').css("color","black");
		$('#clear').css("background",'lightgrey');
	};
});

$('#clear').click(function(){
	$('#results').html('');
	$('#clear').css("background","grey");
	$('#clear').css("color","darkgrey");
});

$('#title').click(function(){
	if ($('header').hasClass('active')){
		$('header').removeClass('active');
	} else { $('header').addClass('active');}
});

$('#logo').click(function(){
	if ($(this).hasClass('active')){
		$(this).removeClass('active');
		$('#slidingmenu').removeClass('active');
	} else {
		$(this).addClass('active');
		$('#slidingmenu').addClass('active');
	}
});