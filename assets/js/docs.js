$(function(){
	var resizeSubNav = function() {
		$('#subnav').height( $(window).height() - 80 );
	};

	$(window).resize( resizeSubNav );
	resizeSubNav();
	$('.overview a').click(function( e ){
		e.preventDefault();
		e.stopPropagation();
		var href = $(this).attr( 'href' ),
			target = $( 'a[name="' + href.substr( 1 ) + '"]' );

		$('.target').removeClass( 'target' );
		$('a.active').removeClass( 'active' );
		$(this).addClass('active');
		target.parents( '.section' ).addClass( 'target' );
		
		$('body, html').animate({
			scrollTop: target.offset().top - 30
		}, 500 );
	});
});