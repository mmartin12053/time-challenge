var myScore = document.getElementById('game').innerHTML;
var hs = 0;
var time = 15000;
var check = 1;
var go;
myScore = 0;

function sploorff(){
    if(!check){
        myScore++
    document.getElementById('game').innerHTML = myScore
    }
    //dave
    if(hs < myScore){
        hs = myScore
        document.getElementById('highscore').innerHTML = hs;
    }
}

function timer() {
    if(check) {
        check = 0;
        go = setInterval(function() {doStuff()},10);
    }
}

function doStuff() {
    if (time < 0) {
        myScore = 0;
        end();
    }
    else {
        document.getElementById('canYouFeelItMrCrabbs').innerHTML = (time / 1000);
        time -=10;
    }
}

function end() {
    clearInterval(go);
    check = 1;
    time = 15000;
    
}



