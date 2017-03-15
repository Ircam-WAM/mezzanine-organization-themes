
function switchVideo(id, url) {
    var video = $('#'+id);
    video.attr("src", url);
}


function failed(e) {
   // video playback failed - show a message saying why
   switch (e.target.error.code) {
     case e.target.error.MEDIA_ERR_ABORTED:
       alert('You aborted the video playback.');
       break;
     case e.target.error.MEDIA_ERR_NETWORK:
       alert('A network error caused the video download to fail part-way.');
       break;
     case e.target.error.MEDIA_ERR_DECODE:
       alert('The video playback was aborted due to a corruption problem or because the video used features your browser did not support.');
       break;
     case e.target.error.MEDIA_ERR_SRC_NOT_SUPPORTED:
       alert('The video could not be loaded, either because the server or network failed or because the format is not supported.');
       break;
     default:
       alert('An unknown error occurred.');
       break;
   }
}


function cleanCounter() {
    $('#countdown-title').html('<br /><br />');
    $('#countdown').html('<br />');
}

function CountDownTimer(dt_begin, dt_end, id, video_id/*, video_url*/)
    {
        var begin = new Date(dt_begin);
        var end = new Date(dt_end);

        var _second = 1000;
        var _minute = _second * 60;
        var _hour = _minute * 60;
        var _day = _hour * 24;
        var timer;
        var distance_out = 1;
        var distance_in = 0;

        function showRemaining() {
            var now = new Date();
            var distance_out = begin - now;
            console.log("distance_out", distance_out)

            if (distance_out < 0) {
                //clearInterval(timer);
                // $('#countdown-title').html('<br /><br />');
                // $('#'+id).html('<br />');
                // $('#live').html('- Live !');
                //switchVideo(video_id, video_url);
                $('.countdown-overlay').hide()
                distance_in = 1;
                nextEvent()
                return;
            }

            $('#countdown-title').html('Retransmission dans :');

            var days = Math.floor(distance_out / _day);
            var hours = Math.floor((distance_out % _day) / _hour);
            var minutes = Math.floor((distance_out % _hour) / _minute);
            var seconds = Math.floor((distance_out % _minute) / _second);

            document.getElementById(id).innerHTML = days + 'jours ';
            document.getElementById(id).innerHTML += hours + 'hrs ';
            document.getElementById(id).innerHTML += minutes + 'mins ';
            document.getElementById(id).innerHTML += seconds + 'secs';

        }

        function nextEvent() {
            var now = new Date();
            var distance_in = end - now;
            console.log("distance_in", distance_in)

            if (distance_in < 0) {
                $('.countdown-overlay').show()

            }
        }

        // calculer le diff avec le prochain évènement
        // réactiver le countdown

        if (distance_out > 0) {
            timer = setInterval(showRemaining, 1000);
        }

        console.log("distance_in", distance_in)
        if (distance_in > 0) {
            timer = setInterval(nextEvent, 1000);
        }
    }


jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) +
                                                $(window).scrollTop()) + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) +
                                                $(window).scrollLeft()) + "px");
    return this;
}
