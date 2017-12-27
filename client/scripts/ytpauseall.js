let yttag = document.createElement('script');
yttag.id = 'iframe-demo';
yttag.src = 'https://www.youtube.com/iframe_api';
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(yttag, firstScriptTag);
let ytplayers = [];
function onYouTubeIframeAPIReady(id){
    if (!id)
        return;
    let player = new YT.Player(id, {
        playervars : {
            'referer': 'http://youtube.com'
        },
        events : {
            'onStateChange' : function(e){
	            if (e.data == YT.PlayerState.PLAYING) {
			        $.each(ytplayers, function() {
			            if (this.getPlayerState() == YT.PlayerState.PLAYING && this.getIframe().id != e.target.getIframe().id) { 
			                this.pauseVideo();
			            }
			        });
			    }
            }
        }
    });
    ytplayers.push(player);
};