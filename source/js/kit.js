jQuery(document).ready(function($) {
	$('.mobile-menu-toggle').on('click touch', function(e){
		$(this).toggleClass('on');
		$('body').toggleClass('mobile-nav-on');
		$('.mobile-navigation').toggle(100);
		e.stopPropagation();
	});
	// close mobile menu tapping outside toggle button
	$('.body-container').on('click touch', function(e) {
		$('body').removeClass('mobile-nav-on');
		$('.mobile-menu-toggle').removeClass('on');
		$('.mobile-navigation').hide();
		e.stopPropagation();
				
	});	
});
