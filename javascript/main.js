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

	// START CONTENT&BG CHANGE
	window._timers = {
	  changeBackground : null
	};

	var bg = 0;
	var backgroundsArray = Array('youth', 'family', 'travel');

	function multiBackground(){
    bg = (bg+1) % backgroundsArray.length ;
    $('section.start').attr('id', backgroundsArray[bg]);
    clearTimeout(window._timers.changeBackground);
    window._timers.changeBackground = setTimeout(multiBackground, 6000);
	}

	multiBackground()
	popup()

});