console.log("start audio.js");

function play(){
  // audio 要素を探す
  var audio;
  audio = document.querySelector("audio");
  // 探した audio 要素に対して操作する
  audio.play();
}

function pause(){
  // audio 要素を探す
  var audio;
  audio = document.querySelector("audio");
  // 探した audio 要素に対して操作する
  audio.pause();
}

var playButton = document.querySelector("[data-role=play]");
var pauseButton = document.querySelector("[data-role=pause]");
playButton.addEventListener("click", play);
pauseButton.addEventListener("click", pause);
