// Inject YouTube API script
var tag = document.createElement('script');
tag.src = "http://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// global variables
var player;

/* I'm very sorry for your code */
function onYouTubePlayerAPIReady() {
  player = new YT.Player('player', {
    events: {
      'onReady': onPlayerReady
    }
  });
  player2 = new YT.Player('player2', {
    events: {
      'onReady': onPlayerReady
    }
  });
  player3 = new YT.Player('player3', {
    events: {
      'onReady': onPlayerReady
    }
  });
  player4 = new YT.Player('player4', {
    events: {
      'onReady': onPlayerReady
    }
  });
}
function onPlayerReady(event) {
  $('.close_btn').on("click", function() {
    player.pauseVideo();
    player2.pauseVideo();
    player3.pauseVideo();
    player4.pauseVideo();
  });
}

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
