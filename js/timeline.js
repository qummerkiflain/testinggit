$(function() {
    if (window.matchMedia('(max-width: 480px)').matches) {
        $('.progressbar').each(function(){
            var t = $(this);
            var dataperc = t.attr('data-perc'),
                    barperc = Math.round(dataperc*2.5);
            t.find('.bar').animate({width:barperc}, dataperc*25);
            t.find('.label').append('<div class="perc"></div>');
            
            function perc() {
                var length = t.find('.bar').css('width'),
                    perc = Math.round(parseInt(length)/2.5),
                    labelpos = (parseInt(length)-2);
                t.find('.label').css('left', labelpos);
                t.find('.perc').text(perc+'%');
            }
            perc();
            setInterval(perc, 0); 
        });
    } else {
        $('.progressbar').each(function(){
            var t = $(this);
            var dataperc = t.attr('data-perc'),
                    barperc = Math.round(dataperc*3);
            t.find('.bar').animate({width:barperc}, dataperc*25);
            t.find('.label').append('<div class="perc"></div>');
            
            function perc() {
                var length = t.find('.bar').css('width'),
                    perc = Math.round(parseInt(length)/3),
                    labelpos = (parseInt(length)-2);
                t.find('.label').css('left', labelpos);
                t.find('.perc').text(perc+'%');
            }
            perc();
            setInterval(perc, 0); 
        });
    }
});