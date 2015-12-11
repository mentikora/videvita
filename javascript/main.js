$( document ).ready(function() {
  
	// POPUP
	function popup(){
		var closeBtn = $('.close_btn');
		var showPopupBtn = $('.fake_play');

		// find&show
		showPopupBtn.on('click', function(){
			var getPopup = $(this).attr('data-target');
			$('#'+getPopup).addClass('visible').fadeIn();
		});

		// close
		closeBtn.on('click', function(){
			$(this).closest('.overflow').removeClass('visible').fadeOut();
		});
	}

	popup()

});