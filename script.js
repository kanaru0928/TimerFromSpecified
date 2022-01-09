'use strict'

var date

function listenEvent(){
    $('#datetime').on('change', function () {
        date = Date.parse($(this).val())
    });
}

function tick(){
    if(date){
        var now = Date.now();
        var time = now - date;
        var sec = Math.floor(time/1000)%60;
        var min = Math.floor(time/1000/60)%60;
        var hours = Math.floor(time/1000/60/60);
        var min_str = ('00' + min).slice(-2);
        var sec_str = ('00' + sec).slice(-2);
        var str = `${hours}:${min_str}:${sec_str}`;
        $('#time').html(str);
    }
}

$(function(){
    listenEvent();
    setInterval(tick, 500)
});