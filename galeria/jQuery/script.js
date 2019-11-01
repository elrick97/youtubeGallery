$(document).ready(function() {
    $.get(
        "https://www.googleapis.com/youtube/v3/channels",{
            part: 'contentDetails',
            forUsername: 'neurofinanzas',
            key: 'AIzaSyBilQxOU71-lxTx4D5vw2oXS7qdSFQif1Q'},

        function(data) {
            $.each(data.items, function(i,item){
                console.log(item)
                pid = item.contentDetails.relatedPlaylists.uploads;
                getVids(pid)
            })
        }

    )

    function getVids(pid) {

        $.get(
            "https://www.googleapis.com/youtube/v3/playlistItems",{
                part: 'snippet',
                maxResults: 10,
                playlistId: pid,
                key: 'AIzaSyBilQxOU71-lxTx4D5vw2oXS7qdSFQif1Q'},
    
            function(data) {
                var output
                var array = []
                $.each(data.items, function(i,item){
                    console.log(item)
                    videoId = item.snippet.id
                    array.push(videoId)
                    $('#results').push(videoId)
                })
            }
    
        )
            
    }
});

