var playlistId = "PLmDfRlcNSWvugIiCBgepuo4eDtmNK8bry";
var tag = document.createElement('script');
	tag.src = "https://www.youtube.com/iframe_api";

var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubeIframeAPIReady() {
	player = new YT.Player('player', {
		playerVars: {
			'autoplay': 1,
			'controls': 0,
			'cc_load_policy': 0,
			'iv_load_policy': 3,
			'modestbranding': 1,
			'rel': 0,
			'mute': 1,
			'showinfo': 0
		},
		events: {
			'onReady': onPlayerReady,
			'onStateChange': onPlayerStateChange
		}
	});
	document.getElementById('resume').onclick = function() {
		player.playVideo();
	};	
}


var playlistArray;
var playListArrayLength;
var maxNumber;

var oldNumber = 0;
var NewNumber = 0;

function newRandomNumber() {
	oldNumber = NewNumber;
	NewNumber = Math.floor(Math.random() * maxNumber);
	if (NewNumber == oldNumber) {
		newRandomNumber();
	} else {
		return NewNumber;
	}
}

function onPlayerReady(event) {
	player.loadPlaylist({
		'listType': 'playlist',
		'list': playlistId
	});
}

var firstLoad = true;
function onPlayerStateChange(event) {	
console.log(event.data);
if (event.data == YT.PlayerState.ENDED) {
	player.playVideoAt(newRandomNumber());   
} else {
	if (firstLoad && event.data == YT.PlayerState.PLAYING) {
		firstLoad = false;
		playlistArray = player.getPlaylist();
		playListArrayLength = playlistArray.length;
		maxNumber = playListArrayLength;
		NewNumber = newRandomNumber();
		player.playVideoAt(newRandomNumber());
	}
}
var state = player.getPlayerState();
if (player.getPlayerState() == 1) {
	document.getElementById('resume').onclick = function() {
		player.pauseVideo();
	};
	document.getElementById("video").innerHTML =               
    "<a class='title' title='"+ player.getVideoData().title +"' href='https://www.youtube.com/watch?v="+ player.getVideoData().video_id + "' target = '_blank'>"+ player.getVideoData().title + "</a>";
	document.getElementById("yt-mobile").innerHTML =               
    "<a class='yt-logo-icon' title='"+ player.getVideoData().title +"' href='https://www.youtube.com/watch?v="+ player.getVideoData().video_id + "' target = '_blank'><img src='../tv/img/yt-logo-icon.png'></a>";
} else {
	document.getElementById('resume').onclick = function() {
		player.playVideo();
	};
}
}

$(function () {
    var timer;
    var fadeInBuffer = false;
    $(document).mousemove(function () {
        if (!fadeInBuffer) {
            if (timer) {
                console.log("clearTimer");
                clearTimeout(timer);
                timer = 0;
            }

                console.log("fadeIn");
            $('html').css({
                cursor: ''
            });
        } else {
            $('body').css({
                cursor: 'default'
            });
            $('.logo').css({
                opacity: '1'
            });
            $('.title').css({
                opacity: '0.2'
            });
            $('.menu').css({
                opacity: '1'
            });
            $('.audio').css({
                opacity: '0.2'
            });
            $('.yt-desktop').css({
                opacity: '1'
            });
            $('.yt-logo-icon').css({
                opacity: '1'
            });
            fadeInBuffer = false;
        }
        timer = setTimeout(function () {
            console.log("fadeout");
             $('body').css({
                cursor: 'none'
            });
            $('.logo').css({
                opacity: '0.5'
            });
            $('.title').css({
                opacity: '0'
            });
            $('.menu').css({
                opacity: '0'
            });
            $('.audio').css({
                opacity: '0'
            });
            $('.yt-desktop').css({
                opacity: '0'
            });	
            $('.yt-logo-icon').css({
                opacity: '0'
            });					
            fadeInBuffer = true;
        }, 2000)
    });
    $('body').css({
                cursor: 'default'
            });
});

$('#audio').on('click', function() {
    var mute_toggle = $(this);

    if(player.isMuted()){
        player.unMute();
        mute_toggle.text('volume_up');
    }
    else{
        player.mute();
        mute_toggle.html('volume_off');
    }
});