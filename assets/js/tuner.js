function playNote(note) {
  var audio = document.getElementById("note-" + note);
  var selectedButton = document.getElementById("button-" + note);
  if(audio.paused) {
    var sounds = document.getElementsByTagName("audio");
    for(i = 0; i < sounds.length; i++) sounds[i].pause();
    var buttons = document.getElementsByClassName("note-button");
    for(i = 0; i < buttons.length; i++) buttons[i].classList.remove("select");
    selectedButton.classList.add("select");
    audio.currentTime = 0;
    audio.play();
  } else {
    selectedButton.classList.remove("select");
    audio.pause();
  }
}