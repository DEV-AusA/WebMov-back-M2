// cada video con su ID
function onYouTubeIframeAPIReady() {
    createPlayer('1mXYnXzHWsI', 'banner-1');
    createPlayer('PeVjdC2BBbk', 'banner-2');
    createPlayer('XxaMczMsFN8', 'banner-3');
    // createPlayer('CaLNiC-bKHQ', 'banner-1');
    // createPlayer('vZ734NWnAHA', 'banner-2');
    // createPlayer('_nZdmwHrcnw', 'banner-3');
};

// function que agrega videos al div con id anterior
function createPlayer(videoId, playerId) {
    var player = new YT.Player(playerId, {
        height: '475',
        width: '1268',
        videoId: videoId,
        playerVars: {
            'autoplay': 1,
            'mute': 1,
            'controls': 0,
            'showinfo': 0,
            'modestbranding': 1,
            'loop': 1,
            'playlist': videoId,
            'fs': 0,
            'iv_load_policy': 3,
            'title': 0,
            'disablekb': 1
        },
        events: {
            'onReady': function(event) {
                event.target.playVideo();
            }
        }
    });
}

module.exports = {
    onYouTubeIframeAPIReady
}