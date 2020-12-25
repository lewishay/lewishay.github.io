function playNote(note) {
  const audio = document.getElementById("note-" + note);
  const selectedButton = document.getElementById("button-" + note);
  if(audio.paused) {
    const sounds = document.getElementsByTagName("audio");
    for(let i = 0; i < sounds.length; i++) sounds[i].pause();
    const buttons = document.getElementsByClassName("note-button");
    for(let i = 0; i < buttons.length; i++) buttons[i].classList.remove("select");
    selectedButton.classList.add("select");
    audio.currentTime = 0;
    audio.play();
  } else {
    selectedButton.classList.remove("select");
    audio.pause();
  }
}

const metronome = new Metronome();
const metronomeSlider = document.getElementById("bpm-slider");
const metronomeButton = document.getElementById("metronome-button")

function metronomeAction() {
  document.getElementById("current-bpm").innerHTML = metronomeSlider.value
  metronome.tempo = parseInt(metronomeSlider.value)
}

metronomeSlider.addEventListener("input", metronomeAction);

window.onload = metronomeAction;

metronomeButton.addEventListener("click", function() {
  metronome.startStop();

  if (metronome.isRunning) {
    metronomeButton.classList.add("select");
  }
  else {
    metronomeButton.classList.remove("select");
  }
});
