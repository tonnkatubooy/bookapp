$(document).on('click','#start-btn',function(){
  if(window.confirm('読書を開始しますか？')){
    window.alert('読書を開始します！')
  } else {
    window.alert('本を準備してね！')
  }
})


var interval_id;
var start_click = false;
var time = 10;
var min = 0;
var sec = 0;

function count_start() {
    if (start_click === false) {
        interval_id = setInterval(count_down, 1000);
        start_click = true;
    }
}

function count_down() {
    var display = document.getElementById('display');
    if (time === 0) {
        window.alert(display.innerHTML = '読書を終了してください');
        count_stop();
    } else {
        time--;
        min = Math.floor(time / 60);
        sec = Math.floor(time % 60); 

        display.innerHTML = '0' + min + ':' + ( sec < 10 ? '0' : '') + sec;// 修正、追記。
    }
}

function count_stop() {
    clearInterval(interval_id);
    start_click = false;
}

function count_reset() {
    time = 10;
    min = 0;
    sec = 0; // senをsecに修正。
    var reset = document.getElementById('display');
    reset.innerHTML = '00:10';

}

window.onload = function () {
    var start = document.getElementById('start');
    start.addEventListener('click', count_start, false);
    var stop = document.getElementById('stop');
    stop.addEventListener('click', count_stop, false);
    var reset = document.getElementById('reset');
    reset.addEventListener('click', count_reset, false);
}