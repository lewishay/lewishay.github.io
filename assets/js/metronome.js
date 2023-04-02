let metronomeInterval;
let isPlaying = false;
let metronomeBeep = new Audio("/assets/audio/metronome.wav");

function stopMetronome() {
    let button = document.getElementsByClassName("metronome-toggle").item(0);
    clearInterval(metronomeInterval);
    button.classList.remove("select");
    isPlaying = false;
}

function toggleMetronome() {
    let button = document.getElementsByClassName("metronome-toggle").item(0);
    if (isPlaying) {
        stopMetronome();
    } else {
        let bpm = parseInt(document.getElementById("bpm-value").textContent);
        let ms = 60000/bpm
        metronomeInterval = setInterval(() => {
            metronomeBeep.play()
        }, ms);
        button.classList.add("select");
        isPlaying = true;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    let bpmSlider = document.getElementById("bpm");
    let bpmValueText = document.getElementById("bpm-value");
    let volumeSlider = document.getElementById("metronome-volume");
    bpmSlider.addEventListener("input", () => {
        bpmValueText.textContent = bpmSlider.value;
        stopMetronome();
    });
    volumeSlider.addEventListener("input", () => {
        metronomeBeep.volume = volumeSlider.value / 100;
    })
}, false);