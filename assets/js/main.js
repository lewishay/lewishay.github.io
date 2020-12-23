const pageAudio = document.getElementsByTagName("audio");
const pageButtons = document.getElementsByClassName("button");

function globalAudioControl(audio, selectedButton) {
  if(audio.paused) {
    for(i = 0; i < pageAudio.length; i++) pageAudio[i].pause();
    for(i = 0; i < pageButtons.length; i++) pageButtons[i].classList.remove("select");
    selectedButton.classList.add("select");
    audio.currentTime = 0;
    audio.play();
  } else {
    selectedButton.classList.remove("select");
    audio.pause();
  }
}

function playNote(note) {
  const audio = document.getElementById("note-" + note);
  const selectedButton = document.getElementById("button-" + note);
  globalAudioControl(audio, selectedButton)
}

const metronomeSlider = document.getElementById("bpm-slider");
const metronomeAudio = document.getElementById("metronome");
const metronomeButton = document.getElementById("metronome-button")

function sliderUpdate() {
  document.getElementById("current-bpm").innerHTML = metronomeSlider.value;
  if(!metronomeAudio.paused) {
    // code here to adjust playback based on BPM
  }
}

metronomeSlider.oninput = sliderUpdate;

function metronomeAction() {
  globalAudioControl(metronomeAudio, metronomeButton)
  sliderUpdate();
}

window.onload = function() {
  document.getElementById("current-bpm").innerHTML = metronomeSlider.value;
}
