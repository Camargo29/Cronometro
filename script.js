var sec = 00;
var min = 00;
var Interval;

function twodigits(digit) {
  if (digit < 10) {
    return "0" + digit;
  } else {
    return digit;
  }
}

//como faz essa merd4 não ativar mais de uma vez?
function start() {
  interval = setInterval(watch, 1000);
}

function pause() {
  clearInterval(interval);
}

function stop() {
  clearInterval(interval);
  sec = 00;
  min = 00;
  document.getElementById("visor").innerText =
    twodigits(min) + ":" + twodigits(sec);
}

function watch() {
  sec++;
  if (sec == 60) {
    min++;
    sec = 0;
  }
  document.getElementById("visor").innerText =
    twodigits(min) + ":" + twodigits(sec);
}
