jQuery(document).ready(function($) {
	$('.mobile-menu-toggle').on('click touch', function(){
		$(this).toggleClass('on');
		$('.mobile-navigation').toggle(100);
	});
});
