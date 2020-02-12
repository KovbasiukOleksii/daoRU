$(document).ready(function() {
						   
	var hash = window.location.hash.substr(1);
	var href = $('#nav li a , #menu_mobile li a').each(function(){
		var href = $(this).attr('href');
		if(hash==href.substr(0,href.length-5)){
			var toLoad = hash+'.html #content';
			$('#content').load(toLoad)
		}											
	});

	$('header #menu #nav li a , header #menu_mobile li a').click(function(){
		
		var toLoad = $(this).attr('href')+' #content';
		$('#content').hide('fast',loadContent);
		$('#load').remove();
		$('.main').append('<span id="load"></span>');
		$('#load').fadeIn('normal');
		window.location.hash = $(this).attr('href').substr(0,$(this).attr('href').length-5);
		function loadContent() {
			$('#content').load(toLoad,'',showNewContent())
		}
		function showNewContent() {
			$('#content').show('normal',hideLoader());
		}
		function hideLoader() {
			$('#load').fadeOut('normal');
		}
		return false;
		
	});

});

